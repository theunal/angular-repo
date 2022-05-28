import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.subscription = interval(1000).subscribe(res => {
    //   console.log(res)
    // })

    // kendimiz bu şekilde observable olusturabiliyoru<
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        if (count == 3) {
          observer.error('complete')
        }
        observer.next(count);
        count++;
      }, 800);
    });


    this.subscription = customIntervalObservable.pipe(filter(filter => {
      return filter > 1
    }),map((number : number) => {
      return 'sayi: ' + number;
    })).subscribe((res: any) => {
      console.log(res);
    }, (err: any) => {
      alert(err);
    }, () => {
      console.log('completed');
    });



  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
