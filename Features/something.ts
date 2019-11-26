import { stringish } from './external-dependency';

export class something {
    constructor(private _firstParam: string, private _secondParam: number) {
        
    }

    get thing() {
        return stringish(this._firstParam) + stringish(this._secondParam);
    }
}