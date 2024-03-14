import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModal: boolean = false;

  constructor() { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  isModalOpen(): boolean {
    return this.showModal;
  }
}
