import { ILabelValuePair } from '@/common/types/UI.types'

// ─── Enums ────────────────────────────────────────────────────────────────────

export enum CustomerUserEstadoEnum {
    Activo               = 'ACTIVO',
    Bloqueado            = 'BLOQUEADO',
    PendienteVerificacion = 'PENDIENTE_VERIFICACION',
}

/**
 * Atributos custom en el token JWT emitido por el pool de Cognito
 * dedicado a los usuarios clientes del storefront.
 */
export enum CustomerCognitoAttributeEnum {
    Email         = 'email',
    EmailVerified = 'email_verified',
    Name          = 'name',
    Locale        = 'locale',
    CustomUserType = 'custom:user-type',
    CustomId      = 'custom:id',  // ec_customer_user.id (string)
}

// ─── Interfaces ───────────────────────────────────────────────────────────────

/**
 * Representación del registro ec_customer_user en la base de datos.
 */
export interface ICustomerUser {
    id:           number
    cliente_id:   number
    cognito_sub:  string
    email:        string
    estado:       CustomerUserEstadoEnum
    ultimo_login: string | null
    created_at:   string
    updated_at:   string
}

/**
 * Payload decodificado del JWT emitido por el pool Cognito de customer users.
 * El campo `sub` es el cognito_sub del usuario.
 */
export interface CustomerCognitoJwtPayload {
    sub:                    string   // cognito_sub — clave para resolver ec_customer_user
    email:                  string
    email_verified:         boolean
    'custom:user-type':     string   // UserTypeEnum.Customer
    'custom:id':            string   // ec_customer_user.id como string
    name:                   string
    locale:                 string
    iss:                    string
    aud:                    string
    exp:                    number
    iat:                    number
    auth_time:              number
    event_id:               string
    jti:                    string
    origin_jti:             string
}

// ─── UI Options ───────────────────────────────────────────────────────────────

export const CustomerUserEstadoOptions: ILabelValuePair<CustomerUserEstadoEnum>[] = [
    { label: 'Activo',                value: CustomerUserEstadoEnum.Activo },
    { label: 'Bloqueado',             value: CustomerUserEstadoEnum.Bloqueado },
    { label: 'Pendiente verificación', value: CustomerUserEstadoEnum.PendienteVerificacion },
]