import { type EtiquetaGeneral } from '@/modules/Etiquetas/EtiquetasGenerales/types/EtiquetaGeneral.types'

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
  plan: {
    id: number;
    comentariosWeb: string | null;
    comentarios: string | null;
    cantidad_cuotas: number;
    coeficiente_recargo_descuento: string;
    porcentaje_reintegro: string | null;
    activo: boolean;
    mostrar_en_calculadora: boolean;
    badge_img_url: string | null;
    fecha_desde_valido: string | null;
    fecha_hasta_valido: string | null;
    created_at: string;
    updated_at: string;
    servicio_pago_id: number;
    tarjeta_id: number;
    banco_id: number;
    nro_comercio_id: number;
  } | null
  etiquetas_generales: EtiquetaGeneral[] | null
}
