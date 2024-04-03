import { Component } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {

  // Se inyecta de manera pública  NameService en una variable llamada nameService
  constructor(public nameService:NameService){}
  //agregar propiedades
  //name:string=""; si se usa ester sacar el signo de exclamaci´ñon de this.name
  name?:string;
  // crear método para añadir nombre, a través del add generado en el servicio
  addName(){  
    if (!this.name) {
      alert('El campo de nombre no puede estar vacío');
      return; // Detener la ejecución de la función si el nombre está vacío
  }
    this.nameService.add(this.name!)
    //sgte linea es para que el nimbre no se quede pegado en el input
    this.name="";
  }
}



