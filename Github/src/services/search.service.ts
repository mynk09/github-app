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
      'Authorization': 'token 4870e0837eb776e9cbce1c706df39c043ffb6a18'
    })
  }
  searchRepos(q){
    return this.http.get(this.baseUrl+q,this.token);
  }
}
