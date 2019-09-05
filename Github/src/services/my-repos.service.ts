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
      'Authorization': 'token 4870e0837eb776e9cbce1c706df39c043ffb6a18'
    })
  }
  getRepo(){
    return this.http.get(this.baseUrl,this.token);
  }
}
