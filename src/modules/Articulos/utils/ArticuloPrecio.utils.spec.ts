import { Decimal } from 'decimal.js'
import { calcularPorcentajeOff, calcularPrecioSinImpuestos } from './ArticuloPrecio.utils'

const mockArticuloInput01 = {
    aik_ar_codigo: "00570311",
    aik_ap_precio_iva: new Decimal("352603.38"),
    aik_stock_total: 10,
    aik_ap_utilidad: new Decimal("55"),
    aik_ar_cosnet: new Decimal("188005"),
    aik_ap_impuesto_interno: new Decimal("0"),
    aik_iva_porcen: new Decimal("21"),
    costo_subtotal: new Decimal("227486.05"),
    articuloPrecio: {
        arp_utilidad_web: 55,
        arp_utilidad_ofer: null,
        arp_utilidad_ofer_fecha_hasta: null,
        arp_utilidad_ofer_stock_hasta: null,
        arp_descuento: null,
        arp_descuento_fecha_hasta: null,
        arp_descuento_contado: null
    }
}


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

    it('Debe calcular el precio sin incluir impuestos', () => {
        const resultado = calcularPrecioSinImpuestos(mockArticuloInput01.articuloPrecio, mockArticuloInput01.aik_ar_cosnet)
        expect(resultado.toNumber()).toBe(291407.75)
    })
})