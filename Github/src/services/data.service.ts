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
      'Authorization': 'token d0d0329e4aadae7c70abc173e8cd692d64387f7c'
    })
  }
  newRepository(obj) {
    return this.httpClient.post(this.baseUrl, obj, this.options);
  }
  deleteRepository(fname){
    return this.httpClient.delete(this.delUrl+fname, this.options);
  }
}