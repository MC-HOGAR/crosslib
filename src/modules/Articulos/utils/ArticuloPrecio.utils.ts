import { Decimal } from 'decimal.js'

function calcularPrecio (costo_subtotal: Decimal, utilidad: Decimal): Decimal {
    return costo_subtotal.mul( utilidad.div(100).plus(1) )
}
export {
    calcularPrecio
}