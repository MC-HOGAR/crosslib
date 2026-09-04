export interface ServicioPago {
    id: number
    tipo_servicio: TipoServicioPago
    nombre: string
    nombreWeb: string
    orden: number | null
    logoUrl: string | null
    comentarios: string | null
    /**
     * Nombre de la terminal de captura con la que se cobra este servicio de pago.
     * Es un dato operativo interno: se muestra al vendedor y NO viaja por la API
     * pública del storefront. `null` significa "no cargado todavía".
     */
    nombreTerminalCaptura: string | null
    activo: boolean
    mostrar_web: boolean
    created_at: string
    updated_at: string
}

export enum TipoServicioPago {
  CREDITO_DEBITO_FISERV = "CREDITO_DEBITO_FISERV",
  TRANSFERENCIA = "TRANSFERENCIA",
  EFECTIVO = "EFECTIVO",
  CONTADO = "CONTADO",
  CREDITO_PERSONAL = "CREDITO_PERSONAL",
  BILLETERA_MERCADO_PAGO = "BILLETERA_MERCADO_PAGO",
  CREDITO_DEBITO_PAYWAY = "CREDITO_DEBITO_PAYWAY"
}

export type TipoServicioPagoType = "CREDITO_DEBITO_FISERV" | "TRANSFERENCIA" | "EFECTIVO" | "CONTADO" | "CREDITO_PERSONAL" | "BILLETERA_MERCADO_PAGO" | "CREDITO_DEBITO_PAYWAY"