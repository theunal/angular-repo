import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/models/productModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() // veri alıyoruz
  products : ProductModel[] = []

  @Output() // veri gönderiyoruz
  myEvent : EventEmitter<any> = new EventEmitter()



  constructor(private toastrService : ToastrService) { }

  ngOnInit(): void {
  }

  productDelete(product : ProductModel) {
    this.myEvent.emit({
      data : product
    })
    // this.products.splice(this.products.indexOf(product), 1)
    // this.toastrService.error('Product deleted',product.name)
  }
  

}
