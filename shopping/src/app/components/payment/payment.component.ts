import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterContentChecked {



  total: number = 0

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.total = this.basketService.total // ng on init sadece bir kez çalıştıgı için totali güncelliyemiyor
  }

  payment() {
    this.basketService.payment(this.total)
  }




}
