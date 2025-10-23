import { Component } from '@angular/core';
import { category } from '../../models/category';
import { Cantegorias } from '../../producto/cantegorias/cantegorias';
import { Navar } from '../navar/navar';
@Component({
  selector: 'app-dashboard',
  imports: [Cantegorias, Navar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
