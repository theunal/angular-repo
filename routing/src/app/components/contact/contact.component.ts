import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  text: string = ''
  constructor(private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // ng on init ile beraber class ilk çalıştıgında çalışır.
    this.text = this.activedRoute.snapshot.params['id']

    // sadece degerler değişirse çalışır 
    this.activedRoute.params.subscribe(res => {
      this.text = res['id']
    })
  }



  changeContact() {
    this.router.navigate(['/contact', (<HTMLInputElement>document.getElementById('inputC')).value]);
  }

}
