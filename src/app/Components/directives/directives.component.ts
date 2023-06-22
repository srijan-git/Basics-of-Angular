import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  colorName = ['green', 'center'];
  className = 'redWhite';
  students: any = ['Student 1', 'Student 2', 'Student 3'];
  nameVisible: boolean = false;
  showName() {
    this.nameVisible = !this.nameVisible;
  }
}
