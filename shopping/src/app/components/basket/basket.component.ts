import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{



  basketList: BasketModel[] = []
  total: number = 0

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketList = this.basketService.basketList
    this.total = this.basketService.total
  }

  totalPrice() {
    this.total = this.basketService.totalPrice()
    return this.total
  }

  delete(basket: BasketModel) {
    this.basketService.delete(basket)
  }

  increase(basket: BasketModel) {
    this.basketService.increase(basket)
  }

  reduce(basket: BasketModel) {
    this.basketService.reduce(basket)
  }






}