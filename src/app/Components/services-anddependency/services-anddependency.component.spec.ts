import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAnddependencyComponent } from './services-anddependency.component';

describe('ServicesAnddependencyComponent', () => {
  let component: ServicesAnddependencyComponent;
  let fixture: ComponentFixture<ServicesAnddependencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesAnddependencyComponent]
    });
    fixture = TestBed.createComponent(ServicesAnddependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
