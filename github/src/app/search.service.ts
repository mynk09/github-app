import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  _url="https://api.github.com/search/repositories?q=";
  constructor(private http:HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Authorization': 'token f7d386e7da1a7ad744a6cbcd76f7112d11a40a8f'
    })
  }
 getRepo(query){
   return this.http.get(this._url+query, this.options);
 }
}
