import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Navar } from './navar/navar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Navar
  ]
})
export class HomeModule { }
