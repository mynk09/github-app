import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class githubservice {

    _url="https://api.github.com/user/repos";
    constructor(private http:HttpClient) {
     }
     options = {
       headers: new HttpHeaders({
         'Authorization': 'token f7d386e7da1a7ad744a6cbcd76f7112d11a40a8f'
       })
     }
    getUser(){
      return this.http.get(this._url, this.options);
    }
  }

