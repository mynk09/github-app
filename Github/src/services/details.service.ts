import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  baseUrl="https://api.github.com/repos/";
  constructor(private http:HttpClient) { }
  token={
    headers:new HttpHeaders({
      'Authorization': 'token 0de497d26b1cc73097d37f0c2e4cc465ee8d3b2f'
    })
  }
  getDetails(full){
    return this.http.get(this.baseUrl+full,this.token);
  }
}
