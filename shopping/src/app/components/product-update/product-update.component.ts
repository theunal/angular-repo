import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  updateForm : FormGroup
  product : ProductModel

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService,
     private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.createUpdateForm()
  
    this.activatedRoute.params.subscribe(res => {
      console.log(res['id'])
    })

    this.getProduct()
  }

  
  createUpdateForm() {
    this.updateForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      image : new FormControl('', [Validators.required]),
      stok : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required, Validators.nullValidator ])
    })
  }


  productUpdate() {
    if (this.updateForm.valid) {
      let product = new ProductModel
      product.id = this.activatedRoute.snapshot.params['id']
      product.name = this.updateForm.controls['name'].value
      product.image = this.updateForm.controls['image'].value
      product.stok = this.updateForm.controls['stok'].value
      product.price = this.updateForm.controls['price'].value

      this.productService.productUpdate(product)
    } else {
      this.toastrService.info('Lütfen formu doldurunuz!')
    }
  }

  getProduct() {
    return this.productService.getProduct(this.activatedRoute.snapshot.params['id']).subscribe(res => {
      this.product = res
      this.updateForm.controls['name'].setValue(res.name)
      this.updateForm.controls['image'].setValue(res.image)
      this.updateForm.controls['stok'].setValue(res.stok)
      this.updateForm.controls['price'].setValue(res.price)
    })
  }
}
