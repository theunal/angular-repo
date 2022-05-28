import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  
  filterText: string = ''


  products: { name: string, price: number }[] = [
    {
      name: 'a 1',
      price: 100
    },
    {
      name: 'ab 2',
      price: 32
    },
    {
      name: 'abc 3',
      price: 35
    },
    {
      name: 'bc 4',
      price: 1500
    },
    {
      name: 'd 5',
      price: 674
    }
  ]




}
