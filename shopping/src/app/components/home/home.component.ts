import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuth: boolean = false

  constructor(private authService : AuthService) { }

  ngOnInit(): void {  
    this.isAuth = this.authService.isAuthenticated()
  }





}
