import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
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
      this.mensaje = 'Porfavor ingresa tu fecha de Nacimiento'
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

      Swal.fire({
        title: "Gracias por visitarnos",
        text: "Nos encontramos en face de desarrollo y de pruebas, pronto estaremos listos",
        icon: "success",
        draggable: true
      });
      this.router.navigate(['/dashboard']);
    } else {
      Swal.fire({
        title: "! Lo Sentimos !",
        text: "No Podemos dejarte Continuar, edad no permitida.",
        icon: "error",
        draggable: true
      });
    }
  }
}
