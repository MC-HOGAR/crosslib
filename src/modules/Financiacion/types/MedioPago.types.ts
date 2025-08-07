export interface MedioPago {
    id: number
    tipo_medio: TipoMedioPago
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

export enum TipoMedioPago {
  CREDITO_DEBITO = "CREDITO_DEBITO",
  TRANSFERENCIA = "TRANSFERENCIA",
  EFECTIVO = "EFECTIVO",
  CREDITO_PERSONAL = "CREDITO_PERSONAL"
}