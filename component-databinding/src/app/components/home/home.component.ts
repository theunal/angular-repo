import { Component, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  doneModels : DoneModel[] = []
  unDoneModels : UnDoneModel[] = []


  
  constructor() { }

  ngOnInit(): void {
  }

 







 
}
