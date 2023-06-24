import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: '', component: ChildComponent },
];

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyLoadingModule {}
