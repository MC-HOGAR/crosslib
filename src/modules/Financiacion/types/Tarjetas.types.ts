export interface Tarjeta {
    id: number
    nombre: string
    nombreWeb: string
    orden: number
    tipo_tarjeta: TipoTarjeta
    logoUrl: string | null
    comentarios: string | null
    /** Valor de "paymentMethod" de Fiserv (Anexo IV del manual). `null`: no se envía. */
    codigo_fiserv_payment_method: string | null
    activo: boolean
    created_at: string
    updated_at: string
}

export enum TipoTarjeta {
  CREDITO = "CREDITO",
  DEBITO = "DEBITO",
}
