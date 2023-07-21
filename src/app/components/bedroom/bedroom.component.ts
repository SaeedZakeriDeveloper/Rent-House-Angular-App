import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bedroom} from '../../models/bedroom';
import {BedroomService} from '../../services/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  bedrooms: Bedroom[] = [];
  dataLoaded = false;
  currentBedroom: Bedroom;
  bedroomFilter = "";
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  constructor(private bedroomService: BedroomService) {
  }

  ngOnInit(): void {
    this.currentBedroom={ "id" : 0, "title" : "All Bedrooms"};
    this.bedroomService.getAllBedrooms().subscribe(response => {
      this.bedrooms = response as any;
      this.dataLoaded = true;
      this.getCurrentBedroomClass(this.currentBedroom);
    })
  }

  setCurrentBedroom(bedroom: Bedroom) {
    this.currentBedroom = bedroom;
    this.onClick.emit(bedroom.id);
  }

  getCurrentBedroomClass(bedroom: Bedroom) {
 if (bedroom.id == this.currentBedroom.id ) {
      return "list-group-item active cursorPointer";
    } else {
      return "list-group-item cursorPointer"
    }
  }

}
