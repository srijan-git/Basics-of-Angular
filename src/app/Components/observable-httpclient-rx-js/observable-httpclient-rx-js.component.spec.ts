import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableHTTPCLientRxJSComponent } from './observable-httpclient-rx-js.component';

describe('ObservableHTTPCLientRxJSComponent', () => {
  let component: ObservableHTTPCLientRxJSComponent;
  let fixture: ComponentFixture<ObservableHTTPCLientRxJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableHTTPCLientRxJSComponent]
    });
    fixture = TestBed.createComponent(ObservableHTTPCLientRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
