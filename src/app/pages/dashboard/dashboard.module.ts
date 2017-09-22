import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardProfilModule }                 from './../../modules/card-profil/card-profil.module'

import {routing}                            from './dashboard.routing';

import { DashboardComponent }               from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    CardProfilModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      DashboardComponent,

  ]
})
export class DashboardModule { }
