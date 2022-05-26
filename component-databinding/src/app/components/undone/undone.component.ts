import { Component, Input, OnInit } from '@angular/core';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.css']
})
export class UndoneComponent implements OnInit {

  @Input()
  unDoneModels : UnDoneModel[]

  @Input()
  doneModels : UnDoneModel[]

  constructor() { }

  ngOnInit(): void {
  }



  complete(undone : UnDoneModel) {
    this.doneModels.push(undone)
    this.unDoneModels.splice(this.unDoneModels.indexOf(undone), 1)
  }

  delete(undone : UnDoneModel) {
    this.unDoneModels.splice(this.unDoneModels.indexOf(undone), 1)
  }


}
