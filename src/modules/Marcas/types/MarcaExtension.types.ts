import { IMarca } from './Marcas.types'
export interface MarcaExtension {
    aik_ma_codigo: string;
    maext_img_object_key: string | null;
    maext_es_destacada: boolean;
    maext_orden_carousel_destacadas: number;
    updatedAt: Date;
}

export interface MarcaCompleta extends IMarca {
    marca_extension: MarcaExtension
}