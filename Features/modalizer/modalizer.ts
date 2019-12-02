import { autoinject, customElement } from 'aurelia-framework';
import { MdModal } from 'aurelia-materialize-bridge';

@autoinject
@customElement('modalizer')
export class Modalizer {
    modal: MdModal;

    attached() {
        console.log('attached modalizer')
        // this.openModal();
    }

    openModal() {
        this.modal.open();
    }
}
