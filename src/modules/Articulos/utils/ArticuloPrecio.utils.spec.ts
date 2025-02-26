import { Decimal } from 'decimal.js'
import { calcularPorcentajeOff } from './ArticuloPrecio.utils'

describe('calcularPorcentajeOff', () => {
    it('Debe calcular correctamente el porcentaje de descuento', () => {
        const resultado = calcularPorcentajeOff(new Decimal(1000), new Decimal(800))
        expect(resultado.toNumber()).toBeCloseTo(20, 10) // 20% OFF
    })

    it('Debe devolver 0% cuando no hay descuento', () => {
        const resultado = calcularPorcentajeOff(new Decimal(1000), new Decimal(1000))
        expect(resultado.toNumber()).toBe(0)
    })

    it('Debe lanzar un error si el precio de lista es 0', () => {
        expect(() => calcularPorcentajeOff(new Decimal(0), new Decimal(800))).toThrow("El precioAikon no puede ser 0")
    })
})