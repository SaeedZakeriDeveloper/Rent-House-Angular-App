import { Component, OnInit } from '@angular/core';
import { HouseService  } from 'src/app/services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  dataLoaded=false;
  constructor(
    private houseService:HouseService,
  ) { }

  ngOnInit(): void {
    this.getHouses()
  }
  getHouses(){
    this.houseService.getAll().then(response=>{
      // this.houses=response.data.slice(0,6);
      this.dataLoaded=true;
    })
  }

}
