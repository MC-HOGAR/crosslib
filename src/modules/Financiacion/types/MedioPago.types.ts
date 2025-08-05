export interface MedioPago {
    id: number
    codigo_interno: string | null
    nro_terminal: string | null
    tipo_medio: TipoMedioPago
    es_digital: boolean
    nombre: string
    orden: number | null
    logoUrl: string | null
    comentarios: string | null
    activo: boolean
    disponible_online: boolean
    created_at: string
    updated_at: string
}

export enum TipoMedioPago {
  TARJETA = "TARJETA",                                  // Visa, MasterCard, Naranja, etc.
  TRANSFERENCIA_EFECTIVO = "TRANSFERENCIA_EFECTIVO",    // CBU, alias
  CREDITO_PERSONAL = "CREDITO_PERSONAL"                 // Financiamiento de la empresa
}
