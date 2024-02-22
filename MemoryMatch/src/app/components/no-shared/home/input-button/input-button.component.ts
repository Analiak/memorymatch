import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {
  nombre: string = '';

  ingresar() {
    console.log('Nombre ingresado:', this.nombre);
  }
}