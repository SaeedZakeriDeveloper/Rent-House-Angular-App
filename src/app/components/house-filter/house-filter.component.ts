import { Component, OnInit } from '@angular/core';
import { Bedroom } from 'src/app/models/bedroom';
import { Price } from 'src/app/models/price';
import { BedroomService } from 'src/app/services/bedroom.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-house-filter',
  templateUrl: './house-filter.component.html',
  styleUrls: ['./house-filter.component.css']
})
export class HouseFilterComponent implements OnInit {

  constructor(private bedroomService: BedroomService,
    private priceService: PriceService) { }

  bedrooms: Bedroom[] = [];
  prices: Price[] = [];
  bedroomIdFilter: number;
  priceIdFilter: number;

  ngOnInit(): void {
    this.getAllPrices();
    this.getAllBedrooms();
  }

  getAllBedrooms() {
    this.bedroomService.getAllBedrooms().subscribe(response => {
      this.bedrooms = response as any;
    })
  }

  getAllPrices() {
    this.priceService.getAllPrices().subscribe(response => {
      this.prices = response as any;
    })
  }

  selectedBedroom(bedroomId: number) {
    if (this.bedroomIdFilter == bedroomId) {
      return true;
    }
    else {
      return false;
    }
  }

  selectedPrice(priceId: number) {
    if (this.priceIdFilter == priceId) {
      return true;
    }
    else {
      return false;
    }
  }


}