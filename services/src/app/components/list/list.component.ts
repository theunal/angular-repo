import { Component, Input, OnInit } from '@angular/core';
import { EmailModel } from 'src/app/models/emailModel';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  emails : EmailModel[] = []
  
  constructor(private emailService : EmailService) { }

  ngOnInit(): void {
    this.emails = this.emailService.emails
  }

}
