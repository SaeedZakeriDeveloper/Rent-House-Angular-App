
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Price } from '../../models/price';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Output() onClick: EventEmitter<Price> = new EventEmitter();
  prices:Price[] = [];
  dataLoaded = false;
  currentPrice:Price;
  priceFilter = "" ;

  constructor(private priceService:PriceService) { }

  ngOnInit(): void {
    this.currentPrice={
      "id" : 0 ,
      "title": "All Prices",
      "from" : 0,
      "to" : 1000
    };
    this.priceService.getAllPrices().subscribe(response=>{
      this.prices=response as any;
      this.dataLoaded=true;
    })
  }

  setCurrentPrice(price:Price){
    this.currentPrice=price;
    this.onClick.emit(price);
  }


  getCurrentPriceClass(price:Price){
    if(price.id==this.currentPrice.id ){
      return "list-group-item active cursorPointer";
    }
    else {
      return "list-group-item cursorPointer"
    }
  }
}









