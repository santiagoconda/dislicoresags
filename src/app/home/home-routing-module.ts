import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Dashboard } from './dashboard/dashboard';
import { Inicio } from './inicio/inicio';

const routes: Routes = [
  {path: '', component:Inicio}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
