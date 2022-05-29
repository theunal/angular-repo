import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth : boolean = false

  constructor(private httpClient : HttpClient, private router : Router) { }

  isAuthenticated() {
    return this.isAuth
  }

  login(login : LoginModel) : Observable<ResponseModel<TokenModel>>  {
    let url = 'https://webapi.angulareducation.com/api/users/login'
    this.isAuth = true
    return this.httpClient.post<ResponseModel<TokenModel>>(url,login)
  }

  logout() {
    localStorage.removeItem('token')
    this.isAuth = false
    this.router.navigate(['/'])
  }



}
