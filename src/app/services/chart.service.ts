import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TowersCell } from './TowersCell';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  constructor(private http: HttpClient) { }
  url : string  = "http://localhost:3000/TowersCell";

  getTowersCell()
  {
    return this.http.get<TowersCell[]>(this.url);
  }
  

}