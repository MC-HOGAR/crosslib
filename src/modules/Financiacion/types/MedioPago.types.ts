export interface MedioPago {
    id: number
    nro_terminal: string | null
    tipo_medio: TipoMedioPago
    codigo_medio: string | null
    nombre: string
    orden: number
    logoUrl: string | null
    comentarios: string | null
    activo: boolean
    disponible_online: boolean
    es_digital: boolean
    created_at: string
    updated_at: string
}

enum TipoMedioPago {
  TARJETA = "TARJETA",                                  // Visa, MasterCard, Naranja, etc.
  TRANSFERENCIA_EFECTIVO = "TRANSFERENCIA_EFECTIVO",    // CBU, alias
  CREDITO_PERSONAL = "CREDITO_PERSONAL"                 // Financiamiento de la empresa
}