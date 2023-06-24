import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  childData: string | undefined;
  pMethod(data: any) {
    this.childData = data;
  }
}
