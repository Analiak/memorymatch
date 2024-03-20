import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-window-modal',
  templateUrl: './window-modal.component.html',
  styleUrls: ['./window-modal.component.css']
})
export class WindowModalComponent {

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.closeModal();
  }

}



