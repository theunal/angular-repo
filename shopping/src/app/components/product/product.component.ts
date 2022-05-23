import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from './../../models/product';

@Component({
  selector: 'app-product',  
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [
    { name: 'Peynir', price: 99.90, image:'https://cdn.webshopapp.com/shops/312042/files/368822794/890x820x2/de-grand-bazaar-ezine-peyniri-700-749g.jpg'},
    { name: 'Zeytin', price: 85, image:'https://www.organikgurmem.com/images/urunler/Mega-Siyah-Zeytin-1-KG-resim-930.jpg'},
    { name: 'Tereyağ', price: 95.47, image:'https://www.erganyaylatulumpeyniri.com/wp-content/uploads/2021/07/tereyag.jpg'},
    { name: 'Çilek Reçeli', price: 52, image:'https://cdn.yemek.com/mnresize/940/940/uploads/2017/05/sekersiz-cilek-receli-tarifi.jpg'},
    { name: 'Tahin', price: 187.5, image:'https://productimages.hepsiburada.net/s/4/375/9625687556146.jpg'},
    { name: 'Sucuk', price: 250, image:'https://www.seraf.com.tr/seraf-kangal-sucuk-dana-et-1760-16-B.jpg'},
    { name: 'Yerli Muz', price: 35, image:'https://www.tazemasa.com/Uploads/UrunResimleri/buyuk/d2c3eff1-702c-41f0-967d-04b3961e3ec4.jpg'},
  ]
   
  
  baskets : BasketModel[] = []
  total : number = 0

  @Output()
  myEvent : EventEmitter<any> = new EventEmitter()

  constructor(private toastrService : ToastrService) { }

  ngOnInit(): void {
  }


  addBasket(product : ProductModel) {

    let quantity = (<HTMLInputElement>document.getElementById('q-'+ product.name)).value

    let basket = new BasketModel()
    basket.product = product
    basket.quantity = parseInt(quantity)
    this.baskets.push(basket);

    (<HTMLInputElement>document.getElementById('q-'+ product.name)).value = "1"
    
   


    this.myEvent.emit({
      data : this.baskets
    })
    
    this.toastrService.success(product.name+' Sepete Eklendi', 'Başarılı')
  }

}
