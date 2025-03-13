import { Decimal } from 'decimal.js'

const PORCENTAJE_DESCUENTO_VALOR_MINIMO_ACEPTADO = 2

function calcularPrecio (costo_subtotal: Decimal, utilidad: Decimal): Decimal {
    return costo_subtotal.mul( utilidad.div(100).plus(1) )
}

function calcularPorcentajeOff (precioAikon: Decimal, precioWeb: Decimal): Decimal {
    if (precioAikon.isZero()) { throw new Error("El precioAikon no puede ser 0") }
    const diferencia = precioAikon.sub(precioWeb)
    const porcentajeOff = diferencia.div(precioAikon).mul(100)

    if (porcentajeOff.lessThan(PORCENTAJE_DESCUENTO_VALOR_MINIMO_ACEPTADO)) return new Decimal(0);
    return porcentajeOff.toDecimalPlaces(2)
}

function calcularDescuento (precioBase: Decimal, porcentajeDescuento: Decimal) {
    const descuento = precioBase.mul(porcentajeDescuento.div(100)); // Cálculo del descuento
    return precioBase.sub(descuento); // Aplicar descuento al precio base
}

interface ReglaNegocioInput {
    arp_utilidad_web: number;
    arp_utilidad_ofer: number | null;
    arp_utilidad_ofer_fecha_hasta: string | null;
    arp_utilidad_ofer_stock_hasta: number | null;
    arp_descuento: number | null;
    arp_descuento_fecha_hasta: string | null
  }

function aplicarReglasDeNegocio ({
    arp_utilidad_web,
    arp_utilidad_ofer,
    arp_utilidad_ofer_fecha_hasta,
    arp_utilidad_ofer_stock_hasta,
    arp_descuento,
    arp_descuento_fecha_hasta
}: ReglaNegocioInput) {
    const errores: string[] = [];
    if (!arp_utilidad_ofer && (arp_utilidad_ofer_fecha_hasta || typeof(arp_utilidad_ofer_stock_hasta) === 'number')) {
        errores.push('Utilidad Oferta: Se debe aplicar un valor si se define una condición')
    }
    if(arp_utilidad_ofer_fecha_hasta && typeof(arp_utilidad_ofer_stock_hasta) === 'number') {
        errores.push('Se debe usar únicamente 1 condición para la Utilidad Oferta (Usando Fecha Hasta y Stock Hasta)')
    }
    if (!arp_descuento && arp_descuento_fecha_hasta) {
        errores.push('Descuento: Se debe aplicar un valor si se aplica una condición')
    }
}

export {
    calcularPrecio,
    calcularPorcentajeOff,
    calcularDescuento,
    aplicarReglasDeNegocio
}