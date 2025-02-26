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
    return porcentajeOff
}

export {
    calcularPrecio,
    calcularPorcentajeOff
}