import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  //!  Interpolation
  bindingTechnique: string = 'Interpolation';

  //!  Property Binding
  imageBinding: any = '../../../assets/angular.svg';
  height: number = 100;
  width: number = 30;

  //! Event Binding
  generateAlert() {
    alert('Hey Event Binding...');
  }

  //! Two way binding
  name = 'Two way data binding';
}
