import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44350/api/customers/getall"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiUrl);
  }
}
