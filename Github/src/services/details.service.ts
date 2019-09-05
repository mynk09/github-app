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
      'Authorization': 'token d0d0329e4aadae7c70abc173e8cd692d64387f7c'
    })
  }
  getDetails(full){
    return this.http.get(this.baseUrl+full,this.token);
  }
}
