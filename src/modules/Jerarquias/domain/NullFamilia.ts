import { Familia } from './Familia'
import { IFamiliaData } from './../types/Jerarquias.types'

const familiaData: IFamiliaData = {
    aik_fa_codigo: '-1',
    aik_fa_nombre: '',
    aik_fa_nivel: '',
    aik_fa_palm: ''
}

export class NullFamilia extends Familia {
    private static instance: NullFamilia

    constructor() {
        super(familiaData)
    }

    public static getInstance() {
        if (!NullFamilia.instance) {
            NullFamilia.instance = new NullFamilia()
        }
        return NullFamilia.instance
    }

}