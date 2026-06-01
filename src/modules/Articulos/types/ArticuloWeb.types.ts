import { IImageBucketFile, ProgressiveImage } from '@/common/types/Core.types'

export interface IArticuloWebData {
    aik_ar_codigo: string
    ar_img_principal: ProgressiveImage | null
    ar_descripcion_web: string
    ar_titulo : string
    ar_slug: string
    ar_galeria: IImageBucketFile[]
    updated_at: string | null
    ar_activo: boolean
    cantidad_minima_compra: number | null
    cantidad_incremento_compra: number | null
    inhabilitado_compra_online: boolean | null
}

export const ARTICULO_WEB_IMAGE_METADATA = {
    width: 800,
    height: 800,
    format: 'webp'
}

Object.freeze(ARTICULO_WEB_IMAGE_METADATA)