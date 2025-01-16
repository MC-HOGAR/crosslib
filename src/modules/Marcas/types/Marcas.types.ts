export interface IMarca {
    aik_ma_codigo: string
    aik_ma_descri: string
}

export interface IMarcaWithCount<TData> extends IMarca {
    _count: TData
}

export type TMarcaWithCountArticulo = IMarcaWithCount<{ aikon_articulo: number }>

export type IMarcaData = IMarca