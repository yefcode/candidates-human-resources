import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: any[] = [];

  constructor() { }

  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
      console.log('************************Modal Service adding modal:', modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(modal => modal.id !== id);
  }

  open(id: string) {
      // open modal specified by id
      const modalToOpen: any = this.modals.filter(modal => modal.id === id)[0];
      modalToOpen.open();
      console.log('************************Modal Service open method with id:', id);
  }

  close(id: string) {
      // close modal specified by id
      const modalToClose: any = this.modals.filter(modal => modal.id === id)[0];
      modalToClose.close();
  }
}
