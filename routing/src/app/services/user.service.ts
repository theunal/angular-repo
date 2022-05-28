import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: UserModel[] = [
    { id: 1, name: 'yusuf' },
    { id: 2, name: 'unal' },
    { id: 3, name: 'sdü' },
  ]

  constructor(private router: Router) { }


  getUser(id: number): UserModel {
    return this.users.find(u => u.id === id)
  }

  
  getUserByName(name: string): boolean {
    if (this.users.find(u => u.name === name)) {
      return true
    } else {
      return false
    }
  }


  update(id: number, name: string) {
    this.users.find(u => u.id === id).name = name
    this.router.navigate(['/user'])
  }
}