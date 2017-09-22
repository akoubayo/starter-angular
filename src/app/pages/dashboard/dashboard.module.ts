import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import {routing}            from './dashboard.routing';


import { DashboardComponent } from './dashboard.component';

import { CardProfilModule } from './../../module/card-profil/card-profil.module'

@NgModule({
  imports: [
    CommonModule,
    routing,
    CardProfilModule
  ],
  declarations: [
      DashboardComponent,

  ]
})
export class DashboardModule { }
