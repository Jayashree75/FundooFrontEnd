import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import{environment} from '../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl=environment.BaseUrl;
  constructor(private httpClient:HttpClient) { }

  post(url, data,tokenRequired:boolean=false,headerOption=null):Observable<any>{
  
    console.log(tokenRequired && headerOption);
    return this.httpClient.post(this.baseUrl+url, data,tokenRequired && headerOption);
  }
}