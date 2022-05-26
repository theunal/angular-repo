import { Injectable } from '@angular/core';
import { EmailModel } from '../models/emailModel';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emails : EmailModel[] = []

  constructor() { }


  addEmail(email: any) {
    let e = new EmailModel
    e.name = email.value
    e.date = new Date('dd-mmm-yyyy hh:mm:ss')

    this.emails.push(e)
    console.log(email)
  }
}
