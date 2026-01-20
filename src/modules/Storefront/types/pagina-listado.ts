export interface StorefrontPaginaListado {
    id: number
    slug: string

    top_banner_default_key: string | null
    top_banner_default_nombre: string | null

    top_banner_key: string | null
    top_banner_nombre: string | null
    top_banner_fecha_desde: string | null
    top_banner_fecha_hasta: string | null

    top_banner_activo: boolean

    created_at: string
    updated_at: string
}