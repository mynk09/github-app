import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyReposService {

  baseUrl="https://api.github.com/user/repos";
  constructor(private http:HttpClient) { }
  token={
    headers:new HttpHeaders({
      'Authorization': 'token d0d0329e4aadae7c70abc173e8cd692d64387f7c'
    })
  }
  getRepo(){
    return this.http.get(this.baseUrl,this.token);
  }
}
