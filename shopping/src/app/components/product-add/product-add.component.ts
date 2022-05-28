import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addForm : FormGroup

  constructor(private productService : ProductService, private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm() {
    this.addForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      image : new FormControl('', [Validators.required]),
      stok : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required])
    })
  }

  productAdd() {
    if (this.addForm.valid) {
      this.productService.productAdd(this.addForm.value)
      this.addForm.reset()
    } else {
      this.toastrService.error('Lütfen tüm alanları doldurunuz!')
    }
   
  }

}
