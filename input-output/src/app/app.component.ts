import { Component } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductModel } from './models/productModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  products : ProductModel[] = [
    {name: 'Product 1', date: new Date()},
  ]

  product : string

  constructor(private toastrService : ToastrService) {}

  productAdd() {
    let p = new ProductModel()
    p.name = this.product
    p.date = new Date()

    this.products.push(p)
    this.toastrService.success('Product added',p.name)
  }

  productDelete(event : any) {
    let product = event.data
    this.products.splice(this.products.indexOf(product), 1)
    this.toastrService.error('Product deleted',product.name)
  }

  


}

