import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  user : {
    email: string,
    password: string,
    checkbox: any 
  } = {email: '', password: '', checkbox: false};


  submit(form: any) {
    if (form.valid) {
      console.log(form.value);
      this.user = form.value
      form.reset()
    } else {
      console.log('invalid');
    }
  }


 








}
