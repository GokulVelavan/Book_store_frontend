
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService:HttpService) { }
  userLogin(reqData: { email: any; password: any; })
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
      })
    };
    return this.httpService.postService('/User/login',reqData,false,httpOptions);
  }
  userRegistration(reqData: any)
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
        
      })
    };
   return this.httpService.postService('/User/signup',reqData,false,httpOptions);
  }

  forgetPassword(reqData:any)
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
      })
    };
    return this.httpService.postService('/User/forgetpassword',reqData,false,httpOptions); 
  }
  resetPassword(reqData:any,token: any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token,
      })
    };
    console.log(reqData,httpOptions);
    return this.httpService.putService('/User/resetPassword',reqData,true,httpOptions); 
  }
}
