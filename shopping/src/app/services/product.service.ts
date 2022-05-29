import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // products: ProductModel[] = [
  //   { id:1, name: 'Peynir', stok:100, price: 99.90, image:'https://cdn.webshopapp.com/shops/312042/files/368822794/890x820x2/de-grand-bazaar-ezine-peyniri-700-749g.jpg'},
  //   { id:2, name: 'Zeytin', stok:100, price: 85, image:'https://www.organikgurmem.com/images/urunler/Mega-Siyah-Zeytin-1-KG-resim-930.jpg'},
  //   { id:3, name: 'Tereyağ', stok:100, price: 95.47, image:'https://www.erganyaylatulumpeyniri.com/wp-content/uploads/2021/07/tereyag.jpg'},
  //   { id:4, name: 'Çilek Reçeli', stok:100, price: 52, image:'https://cdn.yemek.com/mnresize/940/940/uploads/2017/05/sekersiz-cilek-receli-tarifi.jpg'},
  //   { id:5, name: 'Tahin', stok:100, price: 87.5, image:'https://productimages.hepsiburada.net/s/4/375/9625687556146.jpg'},
  //   { id:6, name: 'Sucuk', stok:100, price: 250, image:'https://www.seraf.com.tr/seraf-kangal-sucuk-dana-et-1760-16-B.jpg'},
  //   { id:7, name: 'Yerli Muz', stok:100, price: 35, image:'https://www.tazemasa.com/Uploads/UrunResimleri/buyuk/d2c3eff1-702c-41f0-967d-04b3961e3ec4.jpg'},
  // ]



  constructor(private toastrService : ToastrService, private router : Router, private httpClient : HttpClient) { }

 

  // productAdd(product : ProductModel) : boolean {
  //   if (this.products.filter(p => p.name.toLowerCase() == product.name.toLowerCase()).length > 0) {
  //     this.toastrService.error('Bu ürün zaten var!');
  //     return false
  //   } else {
  //     this.products.push(product)
  //     this.toastrService.success('Ürün Oluşturuldu', product.name)
  //     return true
  //   }
  // }

  // getProduct(id : number) : Observable<ProductModel> {
  //   return of(this.products.find(p => p.id == id)) 
  // }

  // productUpdate(product : ProductModel) {
  //   let index = this.products.findIndex(p => p.id == product.id)
  //   this.products[index] = product
    
  //   this.router.navigate(['/'])
  //   this.toastrService.success('Ürün Güncellendi', product.name)
  // }

  getProducts() : Observable<ResponseModel<ProductModel[]>> {
    let url = 'http://localhost:3000/data'
    return this.httpClient.get<ResponseModel<ProductModel[]>>(url)
  }

  

}
