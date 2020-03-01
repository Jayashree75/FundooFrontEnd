import { Injectable } from '@angular/core';
import{HttpService} from '../http/http.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  Login(data)
  {
    return this.httpservice.post('api/UserAccount/Login',data)
  }
  Registration(data)
  {
    return this.httpservice.post('api/UserAccount/Registration',data)
  }
  ForgetPassword(data)
  {
    return this.httpservice.post('api/UserAccount/ForgetPassword',data)
  }
  Reset(data,token:string)
  {
    console.log(token);
    const options = {
      headers: new HttpHeaders({
       'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.post('api/UserAccount/ResetPassword',data,true,options)
  }
  ChangeProfile(data)
  {
    return this.httpservice.post('api/UserAccount/Image',data)
  }
}
