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
  TARJETA = "TARJETA",
  TRANSFERENCIA = "TRANSFERENCIA",
  EFECTIVO = "EFECTIVO",
  CREDITO_PERSONAL = "CREDITO_PERSONAL"
}