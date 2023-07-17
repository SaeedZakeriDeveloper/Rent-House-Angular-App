import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { House } from '../models/house';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { DashboardHouses} from '../models/dashboard-house';
import { HouseStandard } from '../models/houseStandard';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  apiUrl="https://localhost:44388/api/";
  constructor(private httpClient:HttpClient) { }

  getHouses():Observable<ListResponseModel<House>>{
    let newPath= this.apiUrl+"houses/gethousedetails"
    return this.httpClient.get<ListResponseModel<House>>(newPath)
  }

  getHouseById(houseId: number): Observable<SingleResponseModel<House>> {
    let newPath= this.apiUrl+"houses/getbyıd?houseId="+houseId
    return this.httpClient.get<SingleResponseModel<House>>(
      newPath
    );
  }

  addHouse(house:House):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "houses/add", house)
  }
  
  updateHouse(houseStandard:HouseStandard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "houses/update", houseStandard)
  }

  deletHouse(houseStandard:HouseStandard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "houses/delete", houseStandard)
  }

  
  getHousesByBrand(brandId:number):Observable<ListResponseModel<House>>{
    let newPath= this.apiUrl+"houses/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<House>>(newPath)
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
