
import { Component, OnInit } from '@angular/core';
import { Bedroom } from '../../models/bedroom';
import { BedroomService } from '../../services/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  bedrooms:Bedroom[] = [];
  dataLoaded = false;
  currentBedroom:Bedroom;
  bedroomFilter = "" ;

  constructor(private bedroomService:BedroomService) { }

  ngOnInit(): void {
    this.bedroomService.getAllBedrooms().subscribe(response=>{
      this.bedrooms=response as any;
      this.dataLoaded=true;
    })
  }

  setCurrentBedroom(bedroom:Bedroom){
    this.currentBedroom=bedroom;
  }


  getCurrentBedroomClass(bedroom:Bedroom){
    if(bedroom==this.currentBedroom ){
      return "list-group-item active cursorPointer";
    } 
    else {
      return "list-group-item cursorPointer"
    }
  }


  getAllBedroomClass(){

    if(!this.currentBedroom){
      return "list-group-item active cursorPointer";
    } 
    else{
      return "list-group-item cursorPointer"
    }
  }

}










// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bedroom',
//   templateUrl: './bedroom.component.html',
//   styleUrls: ['./bedroom.component.css']
// })
// export class BedroomComponent {

// }

