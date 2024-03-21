import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal-service.service';



@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  constructor(public modalService: ModalService) {}

  openModal() {
    console.log('Abriendo modal...'); 
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }
}



