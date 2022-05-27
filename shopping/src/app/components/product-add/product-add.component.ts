import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from './../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @ViewChild('productName') productName : ElementRef
  @ViewChild('productImage') productImage : ElementRef
  @ViewChild('productStok') productStok : ElementRef
  @ViewChild('productPrice') productPrice : ElementRef



  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  productAdd(productName : any, productImage : any, productStok : any, productPrice : any) {
    let product = new ProductModel
    product.name = productName.value
    product.image = productImage.value
    product.stok = productStok.value
    product.price = productPrice.value

    this.productService.productAdd(product) ? this.resetForm() : null
   
  }

  resetForm() {
    this.productName.nativeElement.value = ''
    this.productImage.nativeElement.value = ''
    this.productStok.nativeElement.value = ''
    this.productPrice.nativeElement.value = ''
  }

}
