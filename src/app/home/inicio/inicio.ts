import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  fechaNacimiento: string = '';
  mensaje: string = '';
  constructor(private router: Router) { }
  verificarEdad() {
    if (!this.fechaNacimiento) {
      this.mensaje = 'porfavor fecha de nacimiento'
      return;

    }
    const hoy = new Date();
    const nacimiento = new Date(this.fechaNacimiento);
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    const edadFinal = mes < 0 || (mes === 0 && hoy.getDay() < nacimiento.getDate())
      ? edad - 1
      : edad;
    if (edadFinal >= 18) {
      this.router.navigate(['/productos']);
    } else {
      this.mensaje = '🚫 Debes tener al menos 18 años para ingresar.';

    }
  }
}
