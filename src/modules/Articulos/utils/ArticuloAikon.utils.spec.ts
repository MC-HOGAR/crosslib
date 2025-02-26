import { Decimal } from 'decimal.js'
import { calcularCostoSubtotal } from './ArticuloAikon.utils'

describe('calcularCostoSubtotal', () => {
    it('Debe calcular correctamente el costo subtotal con IVA e impuesto interno', () => {
        // Arrange (Preparar datos)
        const costoNeto = new Decimal(1000)  // Precio base
        const ivaPorcentaje = new Decimal(21)  // 21% IVA
        const impuestoInternoPorcentaje = new Decimal(5)  // 5% Impuesto Interno

        // Act (Ejecutar función)
        const resultado = calcularCostoSubtotal(costoNeto, ivaPorcentaje, impuestoInternoPorcentaje)

        // Assert (Verificar resultado)
        const esperado = new Decimal(1000)  // Base
            .plus(new Decimal(1000).mul(new Decimal(0.21))) // IVA
            .plus(new Decimal(1000).mul(new Decimal(0.05))) // Impuesto Interno
        
        expect(resultado.toNumber()).toBeCloseTo(esperado.toNumber(), 10) // Comparar con margen de error
    })

    it('Debe calcular correctamente cuando el impuesto interno es 0%', () => {
        const costoNeto = new Decimal(551886.00)
        const ivaPorcentaje = new Decimal(21.00)
        const impuestoInternoPorcentaje = new Decimal(0.00)

        const resultado = calcularCostoSubtotal(costoNeto, ivaPorcentaje, impuestoInternoPorcentaje)

        expect(resultado.toNumber()).toBe(667782.06)
    })

    it('Debe calcular correctamente cuando los impuestos son 0%', () => {
        const costoNeto = new Decimal(500)
        const ivaPorcentaje = new Decimal(0)
        const impuestoInternoPorcentaje = new Decimal(0)

        const resultado = calcularCostoSubtotal(costoNeto, ivaPorcentaje, impuestoInternoPorcentaje)

        expect(resultado.toNumber()).toBe(500)
    })

    it('Debe calcular correctamente cuando el costo neto es 0', () => {
        const costoNeto = new Decimal(0)
        const ivaPorcentaje = new Decimal(21)
        const impuestoInternoPorcentaje = new Decimal(5)

        const resultado = calcularCostoSubtotal(costoNeto, ivaPorcentaje, impuestoInternoPorcentaje)

        expect(resultado.toNumber()).toBe(0)
    })
})
