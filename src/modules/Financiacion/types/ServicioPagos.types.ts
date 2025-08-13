export interface ServicioPago {
    id: number
    tipo_servicio: TipoServicioPago
    nombre: string
    nombreWeb: string
    orden: number | null
    logoUrl: string | null
    comentarios: string | null
    activo: boolean
    mostrar_web: boolean
    created_at: string
    updated_at: string
}

export enum TipoServicioPago {
  CREDITO_DEBITO_FISERV = "CREDITO_DEBITO_FISERV",
  TRANSFERENCIA = "TRANSFERENCIA",
  EFECTIVO = "EFECTIVO",
  CREDITO_PERSONAL = "CREDITO_PERSONAL",
  BILLETERA_MERCADO_PAGO = "BILLETERA_MERCADO_PAGO",
  CREDITO_DEBITO_PAYWAY = "CREDITO_DEBITO_PAYWAY"
}