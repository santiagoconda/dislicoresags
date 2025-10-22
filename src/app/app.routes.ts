import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren:()=>import('./home/home-module').then(m => m.HomeModule)},
    {path: 'productos', loadChildren:()=>import('./producto/producto-module').then(m => m.ProductoModule)},
];
