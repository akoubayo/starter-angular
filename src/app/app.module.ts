import { BrowserModule }                     from '@angular/platform-browser';
import { NgModule }                          from '@angular/core';

import { AppRoutingModule }                  from './app-routing/app-routing.module';
import { MaterializeModule }                 from 'angular2-materialize';

import { AppComponent }                      from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
