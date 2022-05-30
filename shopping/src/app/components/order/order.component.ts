import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderModel } from 'src/app/models/order';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : OrderModel[] = []
  total : number = 0

  

  constructor(private orderService : OrderService, private basketService : BasketService) { }

  ngOnInit(): void {
    this.orders = this.orderService.orders
    this.total = this.basketService.total
    
    console.log(this.orders)
  }

}
