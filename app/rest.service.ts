import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TowersCell } from './TowersCell';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:3000/TowersCell";

getTowersCell()
  {
    return this.http.get<TowersCell[]>(this.url);
  }
  

}
