import { Decimal } from 'decimal.js'

function calcularCostoSubtotal(costo_neto: Decimal, iva_porcentaje: Decimal, impuesto_interno_porcentaje: Decimal): Decimal {
    const tasaIVA = iva_porcentaje.div(100)
    const tasaImpuestoInterno = impuesto_interno_porcentaje.div(100)

    const costoIVA = costo_neto.mul(tasaIVA)
    const costoImpuestoInterno = costo_neto.mul(tasaImpuestoInterno)

    return costo_neto.plus(costoIVA).plus(costoImpuestoInterno)
}


export {
    calcularCostoSubtotal
}