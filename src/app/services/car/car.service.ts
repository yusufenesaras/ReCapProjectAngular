import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44350/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByDto():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbydto"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getByBrandId(brandId:number):Observable<Car[]>{
    let newPath = this.apiUrl + "cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<Car[]>(newPath);
  }
  getByColorId(colorId:number):Observable<Car[]>{
    let newPath = this.apiUrl + "cars/getbycolorid?colorId="+colorId
    return this.httpClient.get<Car[]>(newPath);
  }
  getCarDetailsById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
