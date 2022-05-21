import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: '<p class="alert">success works!</p>'
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
