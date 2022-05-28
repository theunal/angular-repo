import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth : boolean = false

  constructor() { }


  isAuthenticated() {
    if (this.isAuth) {
      return true
    } else {
      return false
    }
  }

  login() {
    this.isAuth = true
    // alert('Login Successful')
  }

  logout() {
    this.isAuth = false
    // alert('Logout Successful')
  }




}
