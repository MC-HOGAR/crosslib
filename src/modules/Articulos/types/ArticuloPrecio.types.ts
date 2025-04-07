import { AikonCode } from '../../../common/types/Core.types'
export interface IArticuloPrecioData {
    aik_ar_codigo: AikonCode;
    arp_utilidad_web: string;
    arp_utilidad_ofer?: string;
    arp_utilidad_ofer_fecha_hasta?: string;
    arp_utilidad_ofer_stock_hasta?: number;
    arp_descuento?: string;
    arp_descuento_fecha_hasta?: string;
    arp_porcentaje_off: string;
    arp_precio_web: string;
    arp_precio_web_sin_impuestos: string;
}

export const LP_CODIGO_PRECIO_VENTA_PUBLICO = '01';