import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeBaskets : BasketModel[] = []



  constructor() { }

  ngOnInit(): void {  
  }


  getBasket(event : any) {
    this.homeBaskets = event.data
  }




}