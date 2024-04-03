import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }
  // se inicializa con string vacío, "string"? 
  // name:string="";
  name :string[] = [];
  // indicar método
  add(welcome:string){
    this.name.push(welcome)
  }
}
