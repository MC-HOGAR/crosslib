import { IArticuloPrecioData } from './../types/ArticuloPrecio.types'
export interface IArticuloAikonData {
    aik_ar_codigo: string;
    aik_ar_cosnet: string;
    aik_ap_utilidad: string;
    aik_ap_impuesto_interno: string;
    aik_iva_porcen: string;
    aik_stock_total: number;
    aik_ap_precio_iva: string;
    aik_ar_publicarweb: string;
    aik_ar_descri: string;
    aik_ar_memo: string;
    aik_ar_alto: number;
    aik_ar_ancho: number;
    aik_ar_profundo: number;
    aik_ar_color: string;
    aik_ar_peso: number;
    aik_ar_descria: string;
    aik_ar_mesesgarantia: number;
    aik_esa_codigo: string;
    aik_ar_fechamodif: string;
    aik_ar_fecha_alta: string;
    aik_fa_codigo: string;
    aik_ma_codigo: string;
    aik_re1_codigo: string;
    aik_re2_codigo: string;
    fecha_eliminado_aikon: string | null
};

export interface IArticuloIncludingPrecioData extends IArticuloAikonData {
    articulo_precio: IArticuloPrecioData
}

export enum EstadoArticuloEnum {
    Disponible = "01",
    Activo = "02",
    Inactivo = "03"
}