export class something {
    constructor(private _firstParam: string, private _secondParam: number) {
        
    }

    get thing() {
        return this._firstParam.toString() + this._secondParam.toString();
    }
}