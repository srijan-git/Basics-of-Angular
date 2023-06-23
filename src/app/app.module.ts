import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { HomeComponent } from './Components/home/home.component';
import { DecoratorsAndPipesComponent } from './Components/decorators-and-pipes/decorators-and-pipes.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ServicesAnddependencyComponent } from './Components/services-anddependency/services-anddependency.component';
import { ObservableHTTPCLientRxJSComponent } from './Components/observable-httpclient-rx-js/observable-httpclient-rx-js.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    HeaderComponent,
    DirectivesComponent,
    HomeComponent,
    DecoratorsAndPipesComponent,
    ServicesAnddependencyComponent,
    ObservableHTTPCLientRxJSComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
