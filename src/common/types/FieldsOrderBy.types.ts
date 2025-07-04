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