
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bedroom } from '../models/bedroom';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel'

@Injectable({
  providedIn: 'root'
})


export class BedroomService {

 apiUrl='http://localhost:3000/';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
  constructor(private httpClient:HttpClient) { }

  getAllBedrooms(): Observable<ListResponseModel<Bedroom>>{
    return this.httpClient.get<ListResponseModel<Bedroom>>(this.apiUrl + "bedroom");
  }

  getBedroomById(id:number):Observable<SingleResponseModel<Bedroom>> {
    return this.httpClient.get<SingleResponseModel<Bedroom>>(this.apiUrl + "bedroom/" +id);
  }

  addBedroom(bedroom:Bedroom):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "bedroom",  bedroom);
  }


  updateBedroom(bedroom:Bedroom):Observable<ListResponseModel<Bedroom>> {
    return this.httpClient.put<ListResponseModel<Bedroom>>(this.apiUrl + "bedroom", bedroom)
  }


  deleteBedroom(id : number):Observable<ResponseModel>{
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "bedroom/" + id)
  }
}
