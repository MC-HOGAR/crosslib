import { IBodyHttpResponse } from '../../types/Http.types'
import { IArticuloAikonData } from '@/modules/Articulos/types/ArticuloAikon.types'
import { IArticuloWebData } from '@/modules/Articulos/types/ArticuloWeb.types'
import { IFamiliaData } from '@/modules/Jerarquias/types/Jerarquias.types'
import { IMarcaData } from '@/modules/Marcas/types/Marcas.types'
import { IArticuloPrecioData } from '@/modules/Articulos/types/ArticuloPrecio.types'

export interface ArticuloAikonIncludingArticuloWebAndFamiliaAndMarca extends IArticuloAikonData {
    articulo_web: IArticuloWebData
    aikon_familia: IFamiliaData 
    aikon_marca: IMarcaData
}

export interface ArticuloAikonIncludingArticuloPrecio extends IArticuloAikonData {
    articulo_precio: IArticuloPrecioData
}

export interface ArticuloAikonIncludingArticuloPrecioAndFamiliaAndMarca extends IArticuloAikonData {
    articulo_precio: IArticuloPrecioData
    aikon_familia: IFamiliaData
    aikon_marca: IMarcaData
}

export type BodyHttpResponseArticuloAikonIncludingArticuloWebAndFamiliaAndMarca = IBodyHttpResponse<ArticuloAikonIncludingArticuloWebAndFamiliaAndMarca[]>