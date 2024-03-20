import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  showModal: boolean = false; // Define la propiedad showModal aquí

  constructor(public modalService: ModalService) {}

  openModal() {
    this.showModal = true; // Actualiza el valor de showModal al abrir la modal
    this.modalService.openModal();
  }

  closeModal() {
    this.showModal = false; // Actualiza el valor de showModal al cerrar la modal
    this.modalService.closeModal();
  }
}

