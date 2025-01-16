import { IImageBucketFile } from '../../../common/types/Core.types'
import { IArticuloWebData } from '../types/ArticuloWeb.types'

export class ArticuloWeb {
    aik_ar_codigo: string
    ar_url_img_principal: string
    ar_descripcion_web: string
    ar_titulo: string
    ar_slug: string
    ar_galeria: IImageBucketFile[]
    
    constructor (data: IArticuloWebData) {
        this.aik_ar_codigo = data.aik_ar_codigo
        this.ar_url_img_principal = data.ar_url_img_principal
        this.ar_descripcion_web = data.ar_descripcion_web
        this.ar_titulo = data.ar_titulo
        this.ar_slug = data.ar_slug
        this.ar_galeria = data.ar_galeria
    }
}