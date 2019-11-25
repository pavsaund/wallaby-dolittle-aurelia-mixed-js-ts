import { something } from './../../something';

export class a_context {
    setup_some_stuff: something
    constructor() {
        this.setup_some_stuff = new something('string', 1);
    }
}