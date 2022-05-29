import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm()
  }


  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  login() {
    if (this.loginForm.valid) {
      let Login = new LoginModel()
      Login.email = this.loginForm.value.email
      Login.password = this.loginForm.value.password

      this.authService.login(Login).subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        this.router.navigate(['/'])
        this.toastrService.success('Giriş Yaptınız!', 'Success')
      }, err => {
        this.toastrService.error(err.error, 'Error')
      })
    } else {
      this.toastrService.warning('Lütfen Giriş Bilgilerinizi Doldurun')
    }

  }



}
