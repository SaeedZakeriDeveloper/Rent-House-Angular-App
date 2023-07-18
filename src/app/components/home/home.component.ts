import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house';
import { HouseImage } from 'src/app/models/houseImage';
import { HouseService  } from 'src/app/services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  imageUrl="https://localhost:44388";
  houses:House[]=[];
  currentImage : HouseImage;
  dataLoaded=false;
  constructor(
    private houseService:HouseService,
  ) { }

  ngOnInit(): void {
    this.getHouses()
  }
  getHouses(){
    this.houseService.getAll().subscribe(response=>{
      this.houses=response.data.slice(0,6);
      this.dataLoaded=true;
    })
  }

  getCurrentImageClass(house:House){
    if(house==this.houses[0]){
      return "houseousel-item active"
    } else {
      return "houseousel-item"
    }
  }

  getButtonClass(house:House){
    if(house==this.houses[0]){
      return "active"
    } else {
      return ""
    }
  }
}
