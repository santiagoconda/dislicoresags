import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Productos } from './productos/productos';
import { Cantegorias } from './cantegorias/cantegorias';

const routes: Routes = [
  {path: '', component:Productos},
  {path: 'categorias', component: Cantegorias}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
