export interface cliente {
    id: number
    external_system: string | null

    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: string | null

    nombre_normalizado: string
    apellido_normalizado: string

    genero: string
    email: string
    tel_cod_area: string
    tel_numero: string
    tel_completo: string
    tel_verificado: boolean
    estado: string
    origen_creacion: string

    vendedor_creador_id: number | null
    vendedor_asignado_id: number | null
    cognito_sub: string | null
    fecha_registrado_como_usuario: string | null
    observaciones: string | null

    subscrito_promociones: boolean
    subscrito_newsletter: boolean
    subscrito_encuestas_postventa: boolean
    terminos_acepta_condiciones: boolean | null
    terminos_fecha_aceptacion: string | null
    mp_customer_id: string | null
    fecha_primera_compra: string | null
    fecha_ultima_compra: string | null
    fecha_ultimo_login: string | null

    tipo: string
    fecha_convertido_a_cliente: string | null
    vendedor_convertidor_id: number | null

    created_at: string | null
    updated_at: string | null
}

export enum SistemaExterno {
    AIKON_ERP = "AIKON_ERP"
}
export enum Genero {
    M = "M",
    F = "F"
}
enum ClienteEstado {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO",
    BLOQUEADO = "BLOQUEADO"
}
enum SistemaPropio {
    STOREFRONT = "STOREFRONT",
    PANEL_VENDEDOR = "PANEL_VENDEDOR"
}
enum ClienteTipo {
  CLIENTE_POTENCIAL = "CLIENTE_POTENCIAL",
  CLIENTE_FACTURACION = "CLIENTE_FACTURACION"
}