import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add", component: ProductAddComponent },
  { path: "orders", component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
