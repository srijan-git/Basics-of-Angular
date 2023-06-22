import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './Components/directives/directives.component';
import { HomeComponent } from './Components/home/home.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DecoratorsAndPipesComponent } from './Components/decorators-and-pipes/decorators-and-pipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'databinding',
    component: DataBindingComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'decoratorsandpipes',
    component: DecoratorsAndPipesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
