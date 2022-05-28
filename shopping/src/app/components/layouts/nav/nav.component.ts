import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  baskets : BasketModel[] = []

  constructor(private basketService : BasketService, private authService : AuthService, private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.baskets = this.basketService.basketList
  }


  login() {
    this.authService.login()
    this.toastrService.success('You are logged in!', 'Success')
  }

  logout() {
    this.authService.logout()
    this.toastrService.info('You are logged out!', 'Success')
  }

  getAuth() {
    return this.authService.isAuthenticated()
  }
}
