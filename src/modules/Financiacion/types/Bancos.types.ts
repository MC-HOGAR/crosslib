export interface Banco {
    id: number
    codigo_banco: string | null
    nombre: string
    nombreWeb: string
    logoUrl: string | null
    comentarios: string | null
    activo: boolean
    tipo_banco: TipoBanco
    orden: number
    created_at: string
    updated_at: string
}

export enum TipoBanco {
    TRADICIONAL = "TRADICIONAL",
    DIGITAL = "DIGITAL",
    COOPERATIVA = "COOPERATIVA"
}