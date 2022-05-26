import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {




  @Input()
  doneModels : DoneModel[] = []
  
  @Input()
  unDoneModels : UnDoneModel[] = []

  constructor() { }

  ngOnInit(): void {
  }

  
  addUnDoneModel(unDoneInput : HTMLInputElement) {
    let unDoneModel = new UnDoneModel()
    unDoneModel.title = unDoneInput.value
    unDoneModel.date = new Date('dd-mmm-yyyy hh:mm:ss').toString()
    this.unDoneModels.push(unDoneModel)
  }

}
