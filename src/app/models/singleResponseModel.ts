import { ResponseModel } from './responseModel';

export interface SingleResponseModel<T> extends ResponseModel {
  data: T;
}


// export interface ResponseModel{
//   success:boolean;
//   message:string;
//   data: T

// }