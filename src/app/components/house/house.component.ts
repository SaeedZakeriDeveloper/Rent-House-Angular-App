import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HouseService} from 'src/app/services/house.service';
import {House} from "../../models/house";
import {PriceService} from 'src/app/services/price.service';
import {Price} from 'src/app/models/price';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  allHouses: House[] = [];
  houses: House[] = [];
  dataLoaded = false
  //imageUrl = "https://localhost:44388";
  searchPanelFilter: string = "";
  bedroomFilter: number = 0;
  priceFilter: Price = {
    "id": 0,
    "title": "All Prices",
    "from": 0,
    "to": 1000
  };

  constructor(
    private houseService: HouseService,
    private activatedRoute: ActivatedRoute,
    private priceService: PriceService
  ) {
  }

  onBedroomClick(id: number) {
    this.bedroomFilter = id;
    if (id != 0 && this.priceFilter.id == 0) {
      this.houses = this.allHouses.filter((x: House) => x.bedrooms == id);
    } else if (id != 0 && this.priceFilter.id != 0) {
      this.houses = this.allHouses.filter((x: House) => x.bedrooms == id && x.price > this.priceFilter.from && x.price < this.priceFilter.to);
    } else if (id == 0 && this.priceFilter.id != 0) {
      this.houses = this.allHouses.filter((x: House) => x.price > this.priceFilter.from && x.price < this.priceFilter.to);
    } else {
      this.houses = this.allHouses;
    }
  }

  onPriceClick(price: Price) {
    this.priceFilter = price;
    if (price.id != 0 && this.bedroomFilter == 0) {
      this.houses = this.allHouses.filter((x: House) => x.price > price.from && x.price < price.to);
    } else if (price.id != 0 && this.bedroomFilter != 0) {
      this.houses = this.allHouses.filter((x: House) => x.bedrooms == this.bedroomFilter && x.price > this.priceFilter.from && x.price < this.priceFilter.to);
    } else if (price.id == 0 && this.bedroomFilter != 0) {
      this.houses = this.allHouses.filter((x: House) => x.bedrooms == this.bedroomFilter);
    } else {
      this.houses = this.allHouses;
    }
  }

  searchPanelFilterChange(value: string) {

    this.houses = this.allHouses.filter((x: House) =>
      x.code.toString().includes(value)  ||
      x.description.toString().includes(value)  ||
      x.size.toString().includes(value) ||
      x.bedrooms.toString().includes(value)  ||
      x.bathrooms.toString().includes(value)  ||
      x.price.toString().includes(value) );
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   if (params["bedroomId"]) {
    //     this.houseService.getAllHouses().subscribe(res => {
    //       this.houses = (res as any).filter((x: House) => x.bedrooms == +params["bedroomId"]);
    //       this.dataLoaded = true;
    //       localStorage.setItem('bedroomFilter', params["bedroomId"]);
    //     })
    //   } else if (params["priceId"]) {
    //     let result: Price
    //     this.priceService.getPriceById(+params["priceId"]).subscribe(res => {
    //       result = res as any
    //       this.houseService.getAllHouses().subscribe(res => {
    //         this.houses = (res as any).filter((x: House) => x.price > result.from && x.price < result.to);
    //         this.dataLoaded = true;
    //         localStorage.setItem('priceFilter', params["priceId"]);
    //       })
    //     })
    //   } else {
    //     this.houseService.getAllHouses().subscribe(res => {
    //       this.houses = res as any
    //       this.dataLoaded = true;
    //     })
    //   }
    //
    //
    // })

    this.houseService.getAllHouses().subscribe(res => {
      this.allHouses = res as any
      this.houses = res as any
      this.dataLoaded = true;
    })

  }


  // getCarsByBrand(brandId:number){
  //   this.houseService.getHousesByBrand(brandId).subscribe(response=>{
  //     this.houses=response.data;
  //     this.dataLoaded=true;
  //   })
  // }


  // getHousesByBedrooms(bedroomId: number){
  //    this.houses  =  this.houseService.getHousesByBedrooms(bedroomId);
  //     this.dataLoaded=true;
  // }


  // getCarsBySelect(brandId:number, colorId:number){
  //   this.houseService.getHousesBySelect(brandId,colorId).subscribe(response=>{
  //     this.houses=response.data
  //     this.dataLoaded=true;
  //   })
  // }

}
