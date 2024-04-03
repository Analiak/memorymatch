import { Component } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent {
  constructor(public nameService:NameService){}
  checkName() {
    if (this.nameService.name === '') {
      alert('Por favor, ingrese un nombre antes de continuar.');
    }
  }
}
