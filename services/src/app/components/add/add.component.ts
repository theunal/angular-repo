import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EmailModel } from 'src/app/models/emailModel';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('emailInput')
  emailInput : ElementRef

  constructor(private emailService : EmailService) { }

  ngOnInit(): void {
  }

  addEmail(email: any) {
    this.emailService.addEmail(email)
    this.emailInput.nativeElement.value = ''
  }



}
