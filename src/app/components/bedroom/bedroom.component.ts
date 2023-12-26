import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bedroom} from '../../models/bedroom';
import {BedroomService} from '../../services/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  @Output() onClick: EventEmitter<number> = new EventEmitter();
  bedrooms: Bedroom[] = [];
  currentBedroom: Bedroom;
  bedroomFilter = "";

  constructor(private bedroomService: BedroomService) {
  }

  ngOnInit(): void {
    this.currentBedroom = {"id": 0, "title": "All Bedrooms"};
    this.bedroomService.getAllBedrooms().subscribe(response => {
      this.bedrooms = response as any;
    })
  }

  setCurrentBedroom(bedroom: Bedroom) {
    this.currentBedroom = bedroom;
    this.onClick.emit(bedroom.id);
  }

  getCurrentBedroomClass(bedroom: Bedroom) {
    if (bedroom.id == this.currentBedroom.id) {
      return "list-group-item cursorPointer active";
    } else {
      return "list-group-item cursorPointer";
    }
  }

}
