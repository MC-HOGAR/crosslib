import { PlanPago } from '@/modules/Financiacion/types/PlanPago.types'

export interface ArticuloIndexObject {
  aik_ar_codigo: string
  precio_aikon: string
  aik_stock_total: number
  aik_ar_fecha_alta: string
  aik_ar_fecha_alta_timestamp: number
  marca: string
  categoria: string
  subcategoria: string
  categorias: {
    lvl0: string
    lvl1: string
  },
  titulo: string
  slug: string
  img_principal_full: string
  img_principal_placeholder: string
  precio_web: number
  precio_web_sin_impuestos: number
  off: number
  off_facet: string
  nuevoIngreso: boolean,
  objectID: string,
  plan: PlanPago | null
}