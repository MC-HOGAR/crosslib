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
    }
  

    // TODO, ESTOS MÉTODOS SE DEBEN ELIMINAR. ESTAMOS USANDO LAS UTILS.
    /*calcularPrecio(articulo: ArticuloAikon): void {
      let margen_efectivo = this.arp_utilidad_web;
  
      // Verificar si se aplica la oferta
      if (
        this.arp_utilidad_ofer &&
        this.arp_utilidad_ofer_fecha_hasta &&
        this.arp_utilidad_ofer_fecha_hasta > new Date() &&
        this.arp_utilidad_ofer_stock_hasta &&
        this.arp_utilidad_ofer_stock_hasta <= articulo.aik_stock_total
      ) {
        margen_efectivo = this.arp_utilidad_ofer;
      }
  
      // Calcular precio base con margen efectivo
      let precio_base = articulo.aik_ar_cosnet.mul(margen_efectivo.div(100).plus(1));
  
      // Aplicar impuesto interno
      precio_base = precio_base.mul(articulo.aik_ap_impuesto_interno.div(100).plus(1));
  
      // Aplicar IVA
      precio_base = precio_base.mul(articulo.aik_iva_porcen.div(100).plus(1));
  
      // Aplicar descuento si corresponde
      if (this.arp_descuento && this.arp_descuento_fecha_hasta && this.arp_descuento_fecha_hasta > new Date()) {
        precio_base = precio_base.mul(new Decimal(1).minus(this.arp_descuento.div(100)));
      }
  
      this.arp_precio_venta_iva = precio_base;
  
      // Calcular % OFF basado en el precio con IVA del ERP y el precio de venta calculado
      if (articulo.aik_ap_precio_iva.gt(this.arp_precio_venta_iva)) {
        this.arp_porcentaje_off = articulo.aik_ap_precio_iva
          .minus(this.arp_precio_venta_iva)
          .div(articulo.aik_ap_precio_iva)
          .mul(100);
      } else {
        this.arp_porcentaje_off = new Decimal(0);
      }
    }*/
  
    /*actualizarUtilidadWeb(nueva_utilidad_web: string): void {
      this.arp_utilidad_web = new Decimal(nueva_utilidad_web);
    }
  
    actualizarUtilidadOferta(nueva_utilidad_ofer?: string, fecha_hasta?: Date, stock_hasta?: number): void {
      this.arp_utilidad_ofer = nueva_utilidad_ofer ? new Decimal(nueva_utilidad_ofer) : undefined;
      this.arp_utilidad_ofer_fecha_hasta = fecha_hasta;
      this.arp_utilidad_ofer_stock_hasta = stock_hasta;
    }
  
    actualizarDescuento(nuevo_descuento?: string, fecha_hasta?: Date): void {
      this.arp_descuento = nuevo_descuento ? new Decimal(nuevo_descuento) : undefined;
      this.arp_descuento_fecha_hasta = fecha_hasta;
    }

    calcularPrecioBase(articulo: ArticuloAikon): Decimal {
      const leftSide = articulo.aik_ar_cosnet.mul(articulo.aik_ap_impuesto_interno.div(100))
      const rightSide = articulo.aik_ar_cosnet.mul(articulo.aik_iva_porcen.div(100).plus(1))
      return leftSide.plus(rightSide)
    }
    calcularPrecioConMarkupAikon(articulo: ArticuloAikon): Decimal {
      return this.calcularPrecioBase(articulo).mul(articulo.aik_ap_utilidad.div(100).plus(1))
    }*/
}