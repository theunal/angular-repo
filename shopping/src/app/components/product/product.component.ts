import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from './../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterContentChecked {

  isAuth: boolean = false
  products: ProductModel[] = []
  filterText: string = ''

  constructor(private productService: ProductService, private basketService: BasketService,
    private authService: AuthService, private toastrService: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.productService.getProducts().subscribe(res => {
      this.products = res.data
      this.spinner.hide()
    }, err => {
      if (err.status == '404') {
        this.spinner.hide()
        this.toastrService.error(err.statusText)
      } else {
        this.spinner.hide()
        console.log(err)
      }
    })
  }

  ngAfterContentChecked(): void {
    this.isAuth = this.authService.isAuthenticated()
  }

  addBasket(product: ProductModel) {
    let basket = new BasketModel()
    basket.product = product
    basket.quantity = parseInt((<HTMLInputElement>document.getElementById('q-' + product.name)).value);

    (<HTMLInputElement>document.getElementById('q-' + product.name)).value = "1"

    this.basketService.addBasket(basket)
  }

}
