import { Marca } from './Marca'
import { IMarcaData } from '../types/Marcas.types'

const nullMarca: IMarcaData = {
    aik_ma_codigo: '-1',
    aik_ma_descri: ''
}

export class NullMarca extends Marca {
    private static instance: NullMarca

    constructor() {
        super(nullMarca)
    }

    public static getInstance(): NullMarca {
        if (!NullMarca.instance) {
            NullMarca.instance = new NullMarca()
        }
        return NullMarca.instance
    }
}