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
    description: 'Antioqueño, Amarillo, Caucano',
    imagen:'assets/items/banneraguardiente.webp'

  },
  {
    id: 2,
    name: 'Ron',
    description: 'Viejo de Caldas, Medellin',
    imagen:'assets/items/bannerron.jpg',

  },
  {
    id: 3,
    name: 'Cervezas',
    description: 'Conoce nuestro portafolio de Servezas nacionales que tenemos para ti',
    imagen:'assets/items/cervezabanner.webp'

  },
  {
    id: 4,
    name: 'wiskeys',
    description: 'Conoce nuestro portafolio de wiskeys nacionales que tenemos para ti',
    imagen:'assets/items/wsk.webp'

  },
    {
    id: 5,
    name: 'Bebidas',
    description: 'Idratantes, Agua, Gaseosas Y energizantes',
    imagen:'assets/items/bebidas.jpg'

  },
  ]
    currentIndex = 0;
  transformValue = 'translateX(0)';
  intervalo: any;

   ngOnInit() {
    this.intervalo = setInterval(() => {
      // this.siguiente();
    }, 3000); // cada 3 segundos
  }
    siguiente() {
    const total = this.categorias.length;
    this.currentIndex = (this.currentIndex + 1) % total;
    this.transformValue = `translateX(-${(this.currentIndex * 100) / 3}%)`;
  }
    ngOnDestroy() {
    clearInterval(this.intervalo);
  }

}
