import Decimal from 'decimal.js'
import { IArticuloPrecioData } from '../types/ArticuloPrecio.types'
import { ArticuloAikon } from './ArticuloAikon'

// Clase que gestiona la información de precios, descuentos y utilidad en el ecommerce
export class ArticuloPrecio {
    aik_ar_codigo: string;
    arp_utilidad_web: Decimal; // Margen de utilidad web (%)
    arp_utilidad_ofer?: Decimal; // Margen de oferta (%)
    arp_utilidad_ofer_fecha_hasta?: Date; // Fecha límite para aplicar la oferta
    arp_utilidad_ofer_stock_hasta?: number; // Stock hasta el cual aplica la oferta
    arp_descuento?: Decimal; // Descuento (%)
    arp_descuento_fecha_hasta?: Date; // Fecha límite del descuento
    arp_precio_venta_iva?: Decimal; // Precio final de venta con IVA (calculado)
    arp_porcentaje_off: Decimal; // % OFF calculado basado en precio con IVA (calculado)
    arp_precio_web: Decimal;
    arp_precio_web_sin_impuestos: Decimal;
    arp_descuento_contado: Decimal;
  
    constructor(data: IArticuloPrecioData) {
      this.aik_ar_codigo = data.aik_ar_codigo;
      this.arp_utilidad_web = new Decimal(data.arp_utilidad_web);
      this.arp_utilidad_ofer = data.arp_utilidad_ofer ? new Decimal(data.arp_utilidad_ofer) : undefined;
      this.arp_utilidad_ofer_fecha_hasta = data.arp_utilidad_ofer_fecha_hasta ? new Date(data.arp_utilidad_ofer_fecha_hasta) : undefined;
      this.arp_utilidad_ofer_stock_hasta = data.arp_utilidad_ofer_stock_hasta ?? undefined;
      this.arp_descuento = data.arp_descuento ? new Decimal(data.arp_descuento) : undefined;
      this.arp_descuento_fecha_hasta = data.arp_descuento_fecha_hasta ? new Date(data.arp_descuento_fecha_hasta) : undefined;
      this.arp_porcentaje_off = new Decimal(data.arp_porcentaje_off)
      this.arp_precio_web = new Decimal(data.arp_precio_web)
      this.arp_precio_web_sin_impuestos = new Decimal(data.arp_precio_web_sin_impuestos)
      this.arp_descuento_contado = new Decimal(data.arp_descuento_contado)
    }

}