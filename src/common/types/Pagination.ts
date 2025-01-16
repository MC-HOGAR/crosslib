/*export interface IListadoPaginado {
    cursorId?:                   string | null
    cantidadItemsPagina?:        number
}*/

export interface IOffsetPagination {
    skip: number | null
    take: number | null
}

/*export interface IResultCursorBasedData<TData> {
    items: TData[],
    totalItems: number,
    nextCursor: string | null
}*/
export interface IResultListPaginated<TData> {
    items: TData[],
    totalItems: number,
}

export interface IFiltrosArticulosPaginadoTier1 {
    codigosMarca?:          string[]
    codigosFamilia?:        string[]
    codigosEstadoArticulo?: string[]
    codArticulo?:           string
}

export interface IListadoPaginadoArticuloOptions {
    paginationOptions: IOffsetPagination
    filterOptions: IFiltrosArticulosPaginadoTier1
}

