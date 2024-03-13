import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal-service.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  constructor(public modalService: ModalService) {} // Cambia 'private' a 'public'

  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
