import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BasketModel } from './../../models/basket';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {



  @Input()
  total : number = 0

  @Output()
  myEvent2 : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  totalPrice() {
    return this.total
  }

  payment() {
    this.myEvent2.emit({
      total : this.total
    })
  }




}
