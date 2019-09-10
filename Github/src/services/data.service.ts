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
      'Authorization': 'token 6a8012f7558a627d3010f6cbb4bb262eaa27fa1f'
    })
  }
  newRepository(obj) {
    return this.httpClient.post(this.baseUrl, obj, this.options);
  }
  deleteRepository(fname){
    return this.httpClient.delete(this.delUrl+fname, this.options);
  }
}