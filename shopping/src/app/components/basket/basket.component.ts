import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  @Input()
  basketList: BasketModel[] = []

  @Input()
  total: number = 0



  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
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
    this.toastrService.show(basket.product.name + ' miktarı arttırıldı')
  }

  reduce(basket: BasketModel) {
    if (basket.quantity > 1) {
      basket.quantity--
      this.toastrService.warning(basket.product.name + ' miktarı azaltıldı')
    } else {
      this.basketList.splice(this.basketList.indexOf(basket), 1)
      this.toastrService.info(basket.product.name + ' sepetten silindi')
    }
  }


  payment(event : any) {
    if (event.total == this.total) {
      this.basketList.splice(0, this.basketList.length)
      document.getElementById('paymentCloseButton').click();
      this.toastrService.success('Ödeme Başarılı')
    }
  }




}