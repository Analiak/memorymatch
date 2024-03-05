import { Component, OnInit } from '@angular/core';
// ruta al archivo de la clase
//import { InputButtonComponent } from '../../no-shared/home/input-button/input-button.component';


@Component({
  selector: 'app-simpson-family-cloud',
  templateUrl: './simpson-family-cloud.component.html',
  styleUrls: ['./simpson-family-cloud.component.css'],
})

export class SimpsonFamilyCloudComponent 
//implements OnInit
{
  title = 'family';
  /*
  // comillas vacìas inicializan el nombre
  nombre:string="";
  constructor(private inputButtonComponent: InputButtonComponent) {}
  ngOnInit(): any {
    // Llamamos al método del servicio para obtener el nombre
    this.nombre = this.inputButtonComponent.ingresar(); }*/
  }
