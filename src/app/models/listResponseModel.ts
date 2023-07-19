import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
    filter(arg0: number): import("./house").House[];
    find(arg0: (house: any) => boolean): import("./house").House[];
    data:T[];
}