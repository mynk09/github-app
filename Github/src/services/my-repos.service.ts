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
      'Authorization': 'token 6a8012f7558a627d3010f6cbb4bb262eaa27fa1f'
    })
  }
  getRepo(){
    return this.http.get(this.baseUrl,this.token);
  }
}
