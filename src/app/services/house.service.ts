import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {lastValueFrom, Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { House } from '../models/house';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { DashboardHouses } from '../models/dashboard-house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  apiUrl = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) {
  }

  // async sendRequest(url: string, method = 'GET', data: any = {}) {
  //   this.logRequest(method, url, data);
  //
  //   const httpParams = new HttpParams({ fromObject: data });
  //   const httpOptions = { withCredentials: true, body: httpParams };
  //   let request;
  //
  //   switch (method) {
  //     case 'GET':
  //       request = this.http.get(url, httpOptions);
  //       break;
  //     case 'PUT':
  //       request = this.http.put(url, httpParams, httpOptions);
  //       break;
  //     case 'POST':
  //       request = this.http.post(url, httpParams, httpOptions);
  //       break;
  //     case 'DELETE':
  //       request = this.http.delete(url, httpOptions);
  //       break;
  //   }
  //
  //   try {
  //     const result = await lastValueFrom<any>(request);
  //
  //     return method === 'GET' ? result.data : {};
  //   } catch (e) {
  //     throw e.error.Message;
  //   }
  // }

  // getAllHouses(): Observable<ListResponseModel<House>> {
  //   return this.httpClient.get<ListResponseModel<House>>(this.apiUrl + "house"); // Array<House>
  // }
  async getAll() {
    return await lastValueFrom<any>(this.httpClient.get<House>(this.apiUrl + "house")); // Array<House>
  }
  getHouseById(id: number): Observable<SingleResponseModel<House>> {
    return this.httpClient.get<SingleResponseModel<House>>(this.apiUrl + "house/" + id);
  }

 async add(house: House) {
    return await lastValueFrom<any>(this.httpClient.post(this.apiUrl + "house", house));
    // return this.httpClient.post(this.apiUrl + "house", house);
  }

  updateHouse(house: House): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + "house/" + house.id, house);
  }


  deleteHouse(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "house/" + id);
  }




  getHousesByColor(colorId:number):Observable<ListResponseModel<House>>{
    let newPath= this.apiUrl+"houses/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<House>>(newPath)
  }



  getHousesBySelect(brandId:number, colorId:number){
    let newPath = this.apiUrl + "houses/getbyselected?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient
      .get<ListResponseModel<House>>(newPath);
  }
  getHouseDetail(houseId:number){
    let newPath = this.apiUrl + "houses/gethousedetail?houseId=" + houseId;
    return this.httpClient
      .get<ListResponseModel<House>>(newPath);
  }

  getAllHouseDetail(){
    let newPath = this.apiUrl + "houses/getallhousedetail"
    return this.httpClient
      .get<ListResponseModel<DashboardHouses>>(newPath);
  }
}
