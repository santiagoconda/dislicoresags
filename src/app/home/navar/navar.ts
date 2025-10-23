import { Component } from '@angular/core';
import { SweetAlert } from 'sweetalert/typings/core';
import swal from 'sweetalert';
@Component({
  selector: 'app-navar',
  imports: [],
  templateUrl: './navar.html',
  styleUrl: './navar.css'
})
export class Navar {
ngOnInit(){
  // this.alert()
}
toggleMenuWithDOM(): void {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  toggle?.classList.toggle('active');
  nav?.classList.toggle('active');
}
alert(){
  swal({
  title: "Gracias por visitarnos",
  text: "A un nos encontramos en desarrollo, Esperamos pronto estar listos",
  icon: "info",
  dangerMode: false,
})
}

}
