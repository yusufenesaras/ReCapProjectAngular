import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44350/api/colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<Color[]>{
    return this.httpClient.get<Color[]>(this.apiUrl);
  }
}
