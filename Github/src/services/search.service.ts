import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl="https://api.github.com/search/repositories?q=";
  constructor(private http:HttpClient) { }
  token={
    headers:new HttpHeaders({
      'Authorization': 'token 0de497d26b1cc73097d37f0c2e4cc465ee8d3b2f'
    })
  }
  searchRepos(q){
    return this.http.get(this.baseUrl+q,this.token);
  }
}
