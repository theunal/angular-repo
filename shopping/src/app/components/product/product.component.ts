import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from './../../models/product';

@Component({
  selector: 'app-product',  
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = []


  constructor(private productService : ProductService, private basketService : BasketService) { }

  ngOnInit(): void {
    this.products = this.productService.products
  }


  addBasket(product : ProductModel) {
    let basket = new BasketModel()
    basket.product = product
    basket.quantity = parseInt((<HTMLInputElement>document.getElementById('q-'+ product.name)).value);
   

    (<HTMLInputElement>document.getElementById('q-'+ product.name)).value = "1"
    
    this.basketService.addBasket(basket)
  }

}
