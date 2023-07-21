import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { House } from "../../models/house";
import { PriceService } from 'src/app/services/price.service';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  houses: House[] = [];
  dataLoaded = false
  //imageUrl = "https://localhost:44388";
  filter: string = "";




  constructor(
    private houseService: HouseService,
    private activatedRoute: ActivatedRoute,
    private priceService: PriceService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // if(params["brandId"] && params["colorId"]){
      //   this.getCarsBySelect(params["brandId"],params["colorId"])
      // }
      //else 


      if (params["bedroomId"]) {
        this.houseService.getAllHouses().subscribe(res => {
          this.houses = (res as any).filter((x: House) => x.bedrooms == +params["bedroomId"])
          this.dataLoaded = true;
        })
      }

      else if (params["priceId"]) {
        let result: Price
        this.priceService.getPriceById(+params["priceId"]).subscribe(res => {
          result = res as any
          this.houseService.getAllHouses().subscribe(res => {
            this.houses = (res as any).filter((x: House) => x.price > result.from && x.price < result.to);
            this.dataLoaded = true;
          })
        })
      }

      else {
        this.houseService.getAllHouses().subscribe(res => {
          this.houses = res as any
          this.dataLoaded = true;
        })
      }



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
