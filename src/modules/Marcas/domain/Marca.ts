import { IMarca, IMarcaData } from './../types/Marcas.types'

export class Marca implements IMarca {
    aik_ma_codigo: string
    aik_ma_descri: string

    constructor (marcaData: IMarcaData) {
        this.aik_ma_codigo = marcaData.aik_ma_codigo
        this.aik_ma_descri = marcaData.aik_ma_descri
    }
}