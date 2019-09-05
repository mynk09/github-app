import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "https://api.github.com/user/repos";
  delUrl: string = "https://api.github.com/repos/"
  constructor(private httpClient: HttpClient) { }
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token 0de497d26b1cc73097d37f0c2e4cc465ee8d3b2f'
    })
  }
  newRepository(obj) {
    return this.httpClient.post(this.baseUrl, obj, this.options);
  }
  deleteRepository(fname){
    return this.httpClient.delete(this.delUrl+fname, this.options);
  }
}