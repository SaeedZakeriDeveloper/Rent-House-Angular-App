import {Component, OnInit} from '@angular/core';
import {House} from "../../models/house";
import {Bedroom} from "../../models/bedroom";
import {HouseService} from "../../services/house.service";
import {BedroomService} from "../../services/bedroom.service";
import {PriceService} from "../../services/price.service";
import {Price} from "../../models/price";
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  dataSource: CustomStore;
  allBedrooms:Array<Bedroom>=[];
  allPrices:Array<Price>=[];

  constructor(
    private houseService: HouseService,
    private bedroomService: BedroomService,
    private priceService: PriceService
  ) {

    this.dataSource = new CustomStore({
      key: 'id',
      load: () => this.houseService.getAll(),
      insert: (value:House) =>  this.houseService.add(value),
      update: (key, value) => this.houseService.update(key, value),
      remove: (key) => this.houseService.delete(key)
    });
  }



  ngOnInit(): void {
    this.bedroomService.getAllBedrooms().subscribe(response => {
      this.allBedrooms = response as any;
    });
  }

}
