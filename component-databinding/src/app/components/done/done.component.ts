import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  @Input()
  unDoneModels : UnDoneModel[]
  
  @Input()
  doneModels : DoneModel[]

  constructor() { }

  ngOnInit(): void {
  }


  changeDone(undone : UnDoneModel) {
    this.unDoneModels.push(undone)
    this.doneModels.splice(this.doneModels.indexOf(undone), 1)
  }
}
