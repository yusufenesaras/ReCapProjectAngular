import { BrandResponseModel } from '../../models/brand/brandResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44350/api/brands/getall"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
}
