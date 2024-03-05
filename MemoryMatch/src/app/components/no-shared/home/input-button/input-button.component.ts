import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {
  name: string = '';
  savedName: string = '';

  saveName() {
    console.log('Nombre ingresado:', this.name);
    // new line
    this.savedName= this.name;
  }
}



