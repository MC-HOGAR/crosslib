import { IImageBucketFile, ProgressiveImage } from '@/common/types/Core.types'
import { IArticuloWebData } from '../types/ArticuloWeb.types'

export class ArticuloWeb {
    aik_ar_codigo: string
    ar_img_principal: ProgressiveImage | null
    ar_descripcion_web: string
    ar_titulo: string
    ar_slug: string
    ar_galeria: IImageBucketFile[]
    updated_at: string | null
    ar_activo: boolean

    constructor (data: IArticuloWebData) {
        this.aik_ar_codigo = data.aik_ar_codigo
        this.ar_img_principal = data.ar_img_principal
        this.ar_descripcion_web = data.ar_descripcion_web
        this.ar_titulo = data.ar_titulo
        this.ar_slug = data.ar_slug
        this.ar_galeria = data.ar_galeria
        this.updated_at = data.updated_at
        this.ar_activo = data.ar_activo
    }
}