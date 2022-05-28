import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  getAbout() {
    this.router.navigate(['/about']);
  }

  changeContact() {
    this.router.navigate(['/contact', 'yusuf']);
    this.router.navigate(['/contact', 'yusuf'], {
      queryParams: {
        id: 1,
        name: 'yusuf'
      },
      fragment: 'iletisim'
    });
  }


  login() {
    this.authService.login()

  }

  logout() {
    this.authService.logout()
  }


}
