import { BrowserModule }                     from '@angular/platform-browser';
import { NgModule }                          from '@angular/core';

import { AppRoutingModule }                  from './app-routing/app-routing.module';
import { MaterializeModule }                 from 'angular2-materialize';

import { AppComponent }                      from './app.component';

import { UserService }                       from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
