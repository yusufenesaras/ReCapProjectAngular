import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { CarImage } from 'src/app/models/carImage/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44350/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getcarlistbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarDetailsById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
