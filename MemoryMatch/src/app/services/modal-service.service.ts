import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModal: boolean = false;

  constructor() { }

  openModal() {
    console.log('Abriendo modal...');
    this.showModal = true;
    console.log('Estado de showModal:', this.showModal);
  }
  
  closeModal() {
    console.log('Cerrando modal...');
    this.showModal = false;
    console.log('Estado de showModal:', this.showModal);
  }
  

  isModalOpen(): boolean {
    return this.showModal;
  }
}


