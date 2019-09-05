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
      'Authorization': 'token 4870e0837eb776e9cbce1c706df39c043ffb6a18'
    })
  }
  getDetails(full){
    return this.http.get(this.baseUrl+full,this.token);
  }
}
