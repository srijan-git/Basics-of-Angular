import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './Components/directives/directives.component';
import { HomeComponent } from './Components/home/home.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DecoratorsAndPipesComponent } from './Components/decorators-and-pipes/decorators-and-pipes.component';
import { ServicesAnddependencyComponent } from './Components/services-anddependency/services-anddependency.component';
import { ObservableHTTPCLientRxJSComponent } from './Components/observable-httpclient-rx-js/observable-httpclient-rx-js.component';

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
    path: 'observable',
    component: ObservableHTTPCLientRxJSComponent,
  },
  {
    path: 'lazyloading',
    loadChildren: () =>
      import('./Components/lazy-loading/lazy-loading.module').then(
        (lazyModule) => lazyModule.LazyLoadingModule
      ),
  },
  {
    path: 'lazyloading2',
    loadChildren: () =>
      import('./Components/lazyloadingtwo/lazyloadingtwo.module').then(
        (lazyloading) => lazyloading.LazyloadingtwoModule
      ),
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
