import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  // Inicializando name como un string vacío
  name: string = "";
  constructor() { }
  // Método para agregar un nuevo nombre
  add(newName: string) {
      // Reemplazar el nombre actual con el nuevo nombre
      this.name = newName;
  }
}


