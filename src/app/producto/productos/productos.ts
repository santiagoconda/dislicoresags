import { Component } from '@angular/core';
import { producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  items: producto[] =[
    {
      id:1,
      idCategory:1,
      nombre:'Aguardiente Amarillo De Manzanares',
      descripcion:'Caja por 24 Unidades 375ml 24° de alcohol',
      valor_unitario:25000,
      valor_caja: 580000,
      imagen:'assets/items/aguardienteamarillo.png',
    }
  
  ]

}
