export interface Banco {
    id: number
    codigo_banco: string | null
    nombre: string
    nombreWeb: string
    logoUrl: string | null
    comentarios: string | null
    activo: boolean
    orden: number
    created_at: string
    updated_at: string
}