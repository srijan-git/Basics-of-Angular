import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: ParentComponent },
  { path: '', component: ChildComponent },
];

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class LazyloadingtwoModule {}
