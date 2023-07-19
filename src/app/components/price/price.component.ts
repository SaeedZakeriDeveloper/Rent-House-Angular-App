
import { Component, OnInit } from '@angular/core';
import { Price } from '../../models/price';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  prices:Price[] = [];
  dataLoaded = false;
  currentPrice:Price;
  priceFilter = "" ;

  constructor(private priceService:PriceService) { }

  ngOnInit(): void {
    this.priceService.getAllPrices().subscribe(response=>{
      this.prices=response as any;
      this.dataLoaded=true;
    })
  }


  


  setCurrentPrice(price:Price){
    this.currentPrice=price;
  }


  getCurrentPriceClass(price:Price){
    if(price==this.currentPrice ){
      return "list-group-item active cursorPointer";
    } 
    else {
      return "list-group-item cursorPointer"
    }
  }


  getAllPriceClass(){

    if(!this.currentPrice){
      return "list-group-item active cursorPointer";
    } 
    else{
      return "list-group-item cursorPointer"
    }
  }

}









