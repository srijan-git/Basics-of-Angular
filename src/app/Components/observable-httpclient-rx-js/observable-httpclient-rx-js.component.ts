import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observable-httpclient-rx-js',
  templateUrl: './observable-httpclient-rx-js.component.html',
  styleUrls: ['./observable-httpclient-rx-js.component.css'],
})
export class ObservableHTTPCLientRxJSComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    const myPromise = new Promise((resolve, reject) => {
      console.log('Promise Call.....');
      resolve('Promise Started');
      resolve('Promise Started');
    });

    const myObservable = new Observable((observer) => {
      console.log('Observable started');
      let count = 0;
      setInterval(() => {
        count = count + 1;
        observer.next(count);
      }, 1000);
    });

    // this.subscription = myObservable.subscribe((res) => {
    //   console.log(res);
    // });

    // Observables are unicast
    // const myObservable2 = new Observable((observer) => {
    //   observer.next(Math.random());
    // });

    // Subscriber 1
    // myObservable2.subscribe((res) => console.log(res));

    // Subscriber 2
    // myObservable2.subscribe((res) => console.log(res));

    // Observables are unicast
    // const mySubject = new Subject();
    // Subscriber 1
    // mySubject.subscribe((res) => console.log(res));
    // Subscriber 2
    // mySubject.subscribe((res) => console.log(res));
    // mySubject.next(Math.random());

    // const data = ajax('https://jsonplaceholder.typicode.com/users');
    // console.log(data);
    // const subject = new Subject();
    // subject.subscribe((d) => console.log(d));
    // subject.subscribe((d) => console.log(d));
    // subject.subscribe((d) => console.log(d));
    // data.subscribe(subject);


    
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
