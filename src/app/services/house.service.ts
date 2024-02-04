import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {lastValueFrom, Observable} from 'rxjs';
import {House} from '../models/house';
import {ResponseModel} from '../models/responseModel';
import {SingleResponseModel} from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  apiUrl = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'access-control-allow-origin': 'Access-Control-Allow-Headers'
    })
  };


  constructor(private httpClient: HttpClient) {
  }

  // getAllHouses(): Observable<ListResponseModel<House>> {
  //   return this.httpClient.get<ListResponseModel<House>>(this.apiUrl + "house"); // Array<House>
  // }
  async getAll() {
    return await lastValueFrom<House>(this.httpClient.get<House>(this.apiUrl + "house", this.httpOptions));
  }

  getHouseById(id: number): Observable<SingleResponseModel<House>> {
    return this.httpClient.get<SingleResponseModel<House>>(this.apiUrl + "house/" + id);
  }

  async add(house: House) {
    return await lastValueFrom<any>(this.httpClient.post(this.apiUrl + "house", house));
  }

  async update(id: number, house: House) {
    return await lastValueFrom<ResponseModel>(this.httpClient.patch<ResponseModel>(this.apiUrl + "house/" + id, house));
  }

  async delete(id: number) {
    return await lastValueFrom<void>(this.httpClient.delete<void>(this.apiUrl + "house/" + id));
  }

}
