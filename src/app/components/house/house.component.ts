import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import {House} from "../../models/house";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  houses:House[]=[];
  dataLoaded=false
  imageUrl="https://localhost:44388";
  filter: string="";

  constructor(
    private houseService:HouseService,
    private activatedRoute:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    //   if(params["brandId"] && params["colorId"]){
    //     this.getCarsBySelect(params["brandId"],params["colorId"])
    //   }
    //   else if(params["colorId"]){
    //     this.getCarsByColor(params["colorId"]);
    //   }
    //   else if(params["brandId"]){
    //     this.getCarsByBrand(params["brandId"])
    //
    //   }
    //   else{
    //     this.getCars()
    //   }
    })

  }

  getCars(){
    this.houseService.getAll().subscribe(response=>{
      this.houses=response.data;
      this.dataLoaded=true;
    })
  }

  // getCarsByBrand(brandId:number){
  //   this.houseService.getHousesByBrand(brandId).subscribe(response=>{
  //     this.houses=response.data;
  //     this.dataLoaded=true;
  //   })
  // }

  // getCarsByColor(colorId:number){
  //   this.houseService.getHousesByColor(colorId).subscribe(response=>{
  //     this.houses=response.data;
  //     this.dataLoaded=true;
  //   })
  // }

  // getCarsBySelect(brandId:number, colorId:number){
  //   this.houseService.getHousesBySelect(brandId,colorId).subscribe(response=>{
  //     this.houses=response.data
  //     this.dataLoaded=true;
  //   })
  // }

}
