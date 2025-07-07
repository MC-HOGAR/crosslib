export type ArticuloOrderByStr = 'aik_ar_codigo' | 'aik_ar_fecha_alta' | 'aik_ar_fechamodif' | 'aik_stock_total' | 'aik_ap_utilidad'

export type OrderByDescAsc = 'asc' | 'desc'
export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface IOffsetPagination {
    skip: number | null
    take: number | null
}

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
    orderByField: ArticuloOrderByStr
    orderByDescAsc: OrderByDescAsc
}

export const DEFAULT_ROWS_PER_PAGE = 50