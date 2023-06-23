import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-httpclient-rx-js',
  templateUrl: './observable-httpclient-rx-js.component.html',
  styleUrls: ['./observable-httpclient-rx-js.component.css'],
})
export class ObservableHTTPCLientRxJSComponent implements OnInit {
  myPromise = new Promise((resolve, reject) => {
    console.log('Promise Started');
  });
  myObservable = new Observable((observer) => {
    console.log('Observable Started');
    observer.next('A');
    observer.next('B');
    observer.next('C');
  });
  ngOnInit(): void {
    // this.myObservable.subscribe((res) => {
    //   console.log(res);
    // });
  }
}
