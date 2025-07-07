export interface FieldOption {
  name: string
  code: string
}

export interface SortDto {
  sortBy: string
  sortOrder: string
}

/* Grilla Precio & Artículos */
export enum ArticulosOrderBy {
  CODIGO = 'aik_ar_codigo',
  FECHA_ALTA = 'aik_ar_fecha_alta',
  FECHA_MODIFICADO = 'aik_ar_fechamodif',
  STOCK = 'aik_stock_total',
  UTILIDAD_AIKON = 'aik_ap_utilidad'
}
export const FieldsOptionsArticulosOrderBy: FieldOption[] = [
  { name: 'Código Aikon', code: ArticulosOrderBy.CODIGO }, // El primero es considerado como default
  { name: 'Fecha Alta Aikon', code: ArticulosOrderBy.FECHA_ALTA },
  { name: 'Fecha Modificado Aikon', code: ArticulosOrderBy.FECHA_MODIFICADO },
  { name: 'Stock', code: ArticulosOrderBy.STOCK },
  { name: 'Utilidad Aikon', code: ArticulosOrderBy.UTILIDAD_AIKON },
]

/* Grilla Marcas */
export enum MarcasOrderBy {
  CODIGO = 'aik_ma_codigo',
  DESCRIPCION = 'aik_ma_descri',
  ORDEN_CAROUSEL = 'marca_extension.maext_orden_carousel_destacadas'
}
export const FieldsOptionsMarcasOrderBy: FieldOption[] = [
  { name: 'Código Marca', code: MarcasOrderBy.CODIGO },
  { name: 'Descripción', code: MarcasOrderBy.DESCRIPCION },
  { name: 'Posición carousel', code: MarcasOrderBy.ORDEN_CAROUSEL },
]