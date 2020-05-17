import { Injectable } from '@angular/core';

@Injectable()
export class Validaciones {

    esVacio(input: string): boolean {
        return input === '' || input === undefined;
    }

    esNumerico(input: string): boolean {
        return isNaN(Number(input));
    }

    esEmailValido(input: string): boolean {
        const reg = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
        return reg.test(input);
    }

}
