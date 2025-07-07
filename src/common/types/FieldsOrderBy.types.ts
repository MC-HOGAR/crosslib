/* Grilla Precio & Artículos */
export enum ArticulosOrderBy {
  CODIGO = 'aik_ar_codigo',
  FECHA_ALTA = 'aik_ar_fecha_alta',
  FECHA_MODIFICADO = 'aik_ar_fechamodif',
  STOCK = 'aik_stock_total',
  UTILIDAD_AIKON = 'aik_ap_utilidad'
}
export const FieldsOptionsArticulosOrderBy = [
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
  DESTACADA = 'marca_extension.maext_es_destacada'
}
export const FieldsOptionsMarcasOrderBy = [
  { name: 'Código Marca', code: MarcasOrderBy.CODIGO }, // El primero es considerado como default
  { name: 'Descripción', code: MarcasOrderBy.DESCRIPCION },
  { name: 'Destacada', code: MarcasOrderBy.DESTACADA },
]