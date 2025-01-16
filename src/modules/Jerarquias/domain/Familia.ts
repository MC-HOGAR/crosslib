import { IFamilia, IFamiliaData } from './../types/Jerarquias.types'

export class Familia implements IFamilia {
    aik_fa_codigo: string
    aik_fa_nombre: string
    aik_fa_nivel: string
    aik_fa_palm: string

    constructor(familiaData: IFamiliaData) {
        this.aik_fa_codigo = familiaData.aik_fa_codigo
        this.aik_fa_nombre = familiaData.aik_fa_nombre
        this.aik_fa_nivel = familiaData.aik_fa_nivel
        this.aik_fa_palm = familiaData.aik_fa_palm
    }

}