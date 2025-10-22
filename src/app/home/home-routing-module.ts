import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Dashboard } from './dashboard/dashboard';
import { Inicio } from './inicio/inicio';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  {path: '', component:Inicio},
  {path: 'dashboard', component:Dashboard}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
