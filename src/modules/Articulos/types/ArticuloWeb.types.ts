import { IImageBucketFile } from '../../../common/types/Core.types'

export interface IArticuloWebData {
    aik_ar_codigo: string
    ar_img_principal: IImageBucketFile | null
    ar_descripcion_web: string
    ar_titulo : string
    ar_slug: string
    ar_galeria: IImageBucketFile[]
    updated_at: string | null
}