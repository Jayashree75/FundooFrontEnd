import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.BaseUrl;
  constructor(private httpClient: HttpClient) { }

  post(url, data, tokenRequired: boolean = false, headerOption = null): Observable<any> {
    let httpoption=this.httpheader();
    console.log(tokenRequired && headerOption);
    return this.httpClient.post(this.baseUrl + url, data, tokenRequired && httpoption);
  }
  get(url, tokenRequired: boolean = false, headerOption = null): Observable<any> {
    let httpoption=this.httpheader();
    console.log(tokenRequired && headerOption);
    return this.httpClient.get(this.baseUrl + url, tokenRequired && httpoption)
  }
  put(url, data, tokenRequired: boolean = false, headerOption = null): Observable<any> {
    let httpoption=this.httpheader();
    console.log(tokenRequired && headerOption);
    return this.httpClient.put(this.baseUrl + url, data, tokenRequired && httpoption)
   
  }
  delete(url, tokenRequired: boolean = false, headerOption = null): Observable<any> {
    let httpoption=this.httpheader();
    console.log(tokenRequired && headerOption);
    return this.httpClient.delete(this.baseUrl + url, tokenRequired && httpoption)
  }
  httpheader() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'content-Type': 'application/json'
      })
    };
    return options;
  }
}