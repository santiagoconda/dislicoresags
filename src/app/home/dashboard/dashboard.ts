import { Component } from '@angular/core';
import { category } from '../../models/category';
import { Cantegorias } from '../../producto/cantegorias/cantegorias';
@Component({
  selector: 'app-dashboard',
  imports: [Cantegorias],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
