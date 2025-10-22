import { Component } from '@angular/core';
import { category } from '../../models/category';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cantegorias',
  imports: [CommonModule],
  templateUrl: './cantegorias.html',
  styleUrl: './cantegorias.css'
})
export class Cantegorias {
  categorias: category[] = [{
    id: 1,
    name: 'Aguardiente',
    description: 'Conoce nuestro portafolio de Aguardientes nacionales que tenemos para ti'

  },
  {
    id: 2,
    name: 'Rones',
    description: 'Conoce nuestro portafolio de rones nacionales que tenemos para ti'

  },
  {
    id: 3,
    name: 'Servezas',
    description: 'Conoce nuestro portafolio de Servezas nacionales que tenemos para ti'

  },
  {
    id: 2,
    name: 'wiskeys',
    description: 'Conoce nuestro portafolio de wiskeys nacionales que tenemos para ti'

  },
  ]

}
