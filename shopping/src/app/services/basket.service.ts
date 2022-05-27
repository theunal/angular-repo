import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from '../models/basket';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketList: BasketModel[] = []
  total: number = 0

  constructor(private toastrService : ToastrService, private orderService : OrderService) { }

  
  addBasket(model : BasketModel) {

    if (this.basketList.find(b => b.product == model.product)) {
      this.basketList.find(b => b.product == model.product).quantity += model.quantity
    } else {
      this.basketList.push(model)
      this.toastrService.success(model.product.name + ' Sepete Eklendi', 'Başarılı')
    }
  }

  totalPrice() {
    this.total = 0
    this.basketList.forEach(element => {
      this.total += element.product.price * element.quantity
    })
    return this.total
  }

  delete(basket: BasketModel) {
    this.basketList.splice(this.basketList.indexOf(basket), 1)
    this.toastrService.info(basket.product.name + ' sepetten silindi')
  }

  increase(basket: BasketModel) {
    basket.quantity++
  }

  reduce(basket: BasketModel) {
    if (basket.quantity > 1) {
      basket.quantity--
    } else {
      this.basketList.splice(this.basketList.indexOf(basket), 1)
    }
  }


  payment(total: number) {
    if (total == this.total) {
      this.orderService.addOrder(this.basketList)
     // this.basketList.splice(0, this.basketList.length)
      document.getElementById('paymentCloseButton').click();
      this.toastrService.success('Ödeme Başarılı')

     
    }
  }
}
