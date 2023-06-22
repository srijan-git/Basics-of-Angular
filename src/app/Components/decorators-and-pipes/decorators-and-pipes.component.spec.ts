import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsAndPipesComponent } from './decorators-and-pipes.component';

describe('DecoratorsAndPipesComponent', () => {
  let component: DecoratorsAndPipesComponent;
  let fixture: ComponentFixture<DecoratorsAndPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoratorsAndPipesComponent]
    });
    fixture = TestBed.createComponent(DecoratorsAndPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
