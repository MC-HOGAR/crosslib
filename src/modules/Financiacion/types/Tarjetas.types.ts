export interface Tarjeta {
    id: number
    nombre: string
    orden: number
    logoUrl: string | null
    comentarios: string | null
    esDebito: boolean
    activo: boolean
}