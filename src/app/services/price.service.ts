
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../models/price';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel'

@Injectable({
  providedIn: 'root'
})

export class PriceService {

 apiUrl='http://localhost:3000/';
  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  constructor(private httpClient:HttpClient) { }

  getAllPrices(): Observable<ListResponseModel<Price>>{
    return this.httpClient.get<ListResponseModel<Price>>(this.apiUrl + "price", {headers: this.headers});
  }

  getPriceById(id:number):Observable<SingleResponseModel<Price>> {
    return this.httpClient.get<SingleResponseModel<Price>>(this.apiUrl + "price/" +id);
  }


  addPrice(price:Price):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "price",  price);
  }


  updatePrice(price:Price):Observable<ListResponseModel<Price>> {
    return this.httpClient.put<ListResponseModel<Price>>(this.apiUrl + "price", price)
  }


  deletePrice(id : number):Observable<ResponseModel>{
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "price/" + id)
  }






}
