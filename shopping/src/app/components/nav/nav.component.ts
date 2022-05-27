import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  baskets : BasketModel[] = []

  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    this.baskets = this.basketService.basketList
  }

}
