import { ILabelValuePair } from '@/common/types/UI.types'

export interface ICliente {
    id: number
    external_system: string | null // SistemaExterno

    dni: string
    nombre: string
    apellido: string
    fecha_nacimiento: string | null

    nombre_normalizado: string
    apellido_normalizado: string

    genero: string // Genero
    email: string
    tel_cod_area: string
    tel_numero: string
    tel_completo: string
    tel_verificado: boolean
    estado: string // ClienteEstado
    origen_creacion: string // SistemaPropio

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

    tipo: string // ClienteTipo
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
export enum ClienteEstado {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO",
    BLOQUEADO = "BLOQUEADO"
}
export enum SistemaPropio {
    STOREFRONT = "STOREFRONT",
    PANEL_VENDEDOR = "PANEL_VENDEDOR"
}
export enum ClienteTipo {
  CLIENTE_POTENCIAL = "CLIENTE_POTENCIAL",
  CLIENTE_FACTURACION = "CLIENTE_FACTURACION"
}

export const GeneroSelectOptions: ILabelValuePair<Genero>[] = [
  { label: 'Masculino', value: Genero.M },
  { label: 'Femenino', value: Genero.F },
];

export const ClienteEstadoSelectOptions: ILabelValuePair<ClienteEstado>[] = [
  { label: 'Activo', value: ClienteEstado.ACTIVO },
  { label: 'Inactivo', value: ClienteEstado.INACTIVO },
  { label: 'Bloqueado', value: ClienteEstado.BLOQUEADO },
];

export const SistemaPropioSelectOptions: ILabelValuePair<SistemaPropio>[] = [
  { label: 'PANEL_VENDEDOR', value: SistemaPropio.PANEL_VENDEDOR },
  { label: 'STOREFRONT', value: SistemaPropio.STOREFRONT },
];

export const ClienteTipoSelectOptions: ILabelValuePair<ClienteTipo>[] = [
  { label: 'Cliente Potencial', value: ClienteTipo.CLIENTE_POTENCIAL },
  { label: 'Cliente Facturacion', value: ClienteTipo.CLIENTE_FACTURACION },
];