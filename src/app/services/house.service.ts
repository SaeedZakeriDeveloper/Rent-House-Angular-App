import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {House} from '../models/house';
import {ResponseModel} from '../models/responseModel';
import {SingleResponseModel} from '../models/singleResponseModel';
import {DashboardHouses} from '../models/dashboard-house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  
  apiUrl = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ListResponseModel<House>> {
    return this.httpClient.get<ListResponseModel<House>>(this.apiUrl + "house");
  }

  getById(id: number): Observable<SingleResponseModel<House>> {
    return this.httpClient.get<SingleResponseModel<House>>(this.apiUrl + "house/" + id);
  }

  add(house: House): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "house", house);
  }

  update(house: House): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + "house/" + house.id, house);
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "house/" + id);
  }

  getHousesByBedrooms(bedrooms:string){
    this.getAll().subscribe(res =>{
     return (res as any).filter((house: any) => house.bedrooms == bedrooms);
    });
  }




  // getHousesByColor(colorId:number):Observable<ListResponseModel<House>>{
  //   let newPath= this.apiUrl+"houses/getbycolor?colorId="+colorId
  //   return this.httpClient.get<ListResponseModel<House>>(newPath)
  // }
  // getHousesBySelect(brandId:number, colorId:number){
  //   let newPath = this.apiUrl + "houses/getbyselected?brandId=" + brandId + "&colorId=" + colorId;
  //   return this.httpClient
  //     .get<ListResponseModel<House>>(newPath);
  // }
  // getHouseDetail(houseId:number){
  //   let newPath = this.apiUrl + "houses/gethousedetail?houseId=" + houseId;
  //   return this.httpClient
  //     .get<ListResponseModel<House>>(newPath);
  // }
  
  // getAllHouseDetail(){
  //   let newPath = this.apiUrl + "houses/getallhousedetail"
  //   return this.httpClient
  //     .get<ListResponseModel<DashboardHouses>>(newPath);
  // }
}
