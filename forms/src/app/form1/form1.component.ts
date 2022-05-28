import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  // reactive form
  addForm : FormGroup

  user : {
    email: string,
    password: string,
    checkbox: boolean 
  } = {email: '', password: '', checkbox: false}
  
  constructor() { }

  ngOnInit(): void {
    this.creatAddForm()
    this.addForm.controls['email'].setValue('yu@gmail.com')
  }

 

   creatAddForm() {
     this.addForm = new FormGroup({
       email: new FormControl('', [Validators.email, Validators.required]),
       password: new FormControl('', [Validators.required, Validators.minLength(3)]),
       checkbox: new FormControl(false)
     })
   }



   submit() {
      if (this.addForm.valid) {
        console.log(this.addForm.value)
        this.user = this.addForm.value
        this.addForm.reset()
      } else {
        alert('Invalid Form')
      }
   }



}
