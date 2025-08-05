export interface Tarjeta {
    id: number
    nombre: string
    codigo_tarjeta: string | null
    tipo_tarjeta: TipoTarjeta
    orden: number
    logoUrl: string | null
    comentarios: string | null
    activo: boolean
    created_at: string
    updated_at: string
}

export enum TipoTarjeta {
  CREDITO = "CREDITO",
  DEBITO = "DEBITO",
}