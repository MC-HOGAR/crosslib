import { ILabelValuePair } from '@/common/types/UI.types'

/**
 * Roles del Panel de Vendedores
 */
export enum SalesUserRoleEnum {
  ROOT = 'ROOT',                     // Acceso total al sistema
  ADMINISTRADOR = 'ADMINISTRADOR',   // Administrador del panel
  VENDEDOR = 'VENDEDOR',             // Vendedor estándar
  CAJERO = 'CAJERO',                 // Cajero (vendedor con más privilegios)
  ADMINISTRACION = 'ADMINISTRACION', // Rol administrativo (futuro)
  MARKETING = 'MARKETING',           // Rol de marketing (futuro)
  DEPOSITO = 'DEPOSITO',             // Rol de depósito (futuro)
  USER = 'USER'                      // Rol Usuario básico.
}

/**
 * Status de usuario del panel de vendedores
 */
export enum SalesUserStatusEnum {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
}

export enum SalesLogEntityNameEnum {
    Presupuesto = "Presupuesto",
    ClienteActual = "ClienteActual",
    ClientePotencial = "ClientePotencial",
    Impresion = "Impresion"
}

/**
 * Tipos de eventos de logs (solo para vendedores y cajeros)
 */
export enum SalesLogEventTypeEnum {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CAMBIO_CLAVE = 'CAMBIO_CLAVE',
  CREACION = 'CREACION',
  ACTUALIZACION = 'ACTUALIZACION',
  ELIMINACION_LOGICA = 'ELIMINACION_LOGICA',
  ELIMINACION_FISICA = 'ELIMINACION_FISICA',
  OTRO = 'OTRO',
}

/**
 * Atributos custom de Cognito para Sales Users
*/
export enum SalesCognitoAttributeEnum {
  Email = 'email',
  EmailVerified = 'email_verified',
  Name = 'name',
  Locale = 'locale',
  CustomDNI = 'custom:dni',
  CustomRole = 'custom:role',
  CustomStatus = 'custom:status',
  CustomUserType = 'custom:user-type',
  CustomAikVenCodigo = 'custom:aik-ven-codigo',
  CustomAikDeCodigo = 'custom:aik-de-codigo',
  CustomAikZoCodigo = 'custom:aik-zo-codigo',
}

/**
 * Grupos de Cognito para Sales Users (con prefijo pv_)
 */
export enum SalesCognitoGroupEnum {
  PV_ROOT = 'pv_root',
  PV_ADMINISTRADOR = 'pv_administrador',
  PV_VENDEDOR = 'pv_vendedor',
  PV_CAJERO = 'pv_cajero',
  PV_ADMINISTRACION = 'pv_administracion',
  PV_MARKETING = 'pv_marketing',
  PV_DEPOSITO = 'pv_deposito',
  PV_USER = 'pv_user',
}

/**
 * Mapeo de roles a grupos de Cognito
 */
export const SALES_ROLE_TO_COGNITO_GROUP: Record<SalesUserRoleEnum, SalesCognitoGroupEnum> = {
  [SalesUserRoleEnum.ROOT]: SalesCognitoGroupEnum.PV_ROOT,
  [SalesUserRoleEnum.ADMINISTRADOR]: SalesCognitoGroupEnum.PV_ADMINISTRADOR,
  [SalesUserRoleEnum.VENDEDOR]: SalesCognitoGroupEnum.PV_VENDEDOR,
  [SalesUserRoleEnum.CAJERO]: SalesCognitoGroupEnum.PV_CAJERO,
  [SalesUserRoleEnum.ADMINISTRACION]: SalesCognitoGroupEnum.PV_ADMINISTRACION,
  [SalesUserRoleEnum.MARKETING]: SalesCognitoGroupEnum.PV_MARKETING,
  [SalesUserRoleEnum.DEPOSITO]: SalesCognitoGroupEnum.PV_DEPOSITO,
  [SalesUserRoleEnum.USER]: SalesCognitoGroupEnum.PV_USER,
};

/**
 * Roles que deben ser auditados (Vendedor y Cajero)
 */
export const SALES_ROLES_AUDITABLES = [
  SalesUserRoleEnum.VENDEDOR,
  SalesUserRoleEnum.CAJERO,
] as const;

/**
 * Interface del Sales User
 */
export interface ISalesUser {
  id: number;
  username: string;
  email: string;
  fullname: string;
  dni: string;
  telefono: string; // Obligatorio para contacto WhatsApp
  role: SalesUserRoleEnum;

  aik_ven_codigo: string | null; // Código del vendedor en Aikon
  aik_de_codigo: string | null;  // Código del depósito en Aikon
  aik_zo_codigo: string | null;  // Código de zona en Aikon (solo Vendedor y Cajero)

  status: SalesUserStatusEnum;
  last_login: string | null; // DateTimeString
  last_password_change: string | null; // DateTimeString
  created_at: string; // DateTimeString
  updated_at: string; // DateTimeString
}

/**
 * Interface del usuario decodificado del JWT (Cognito)
 */
export interface SalesCognitoUser {
  aud: string;
  auth_time: number;
  'cognito:groups': string[];
  'cognito:username': string;
  'custom:dni': string;
  'custom:role': SalesUserRoleEnum;
  'custom:status': SalesUserStatusEnum;
  'custom:user-type': string; // 'Sales'

  'custom:aik-ven-codigo'?: string;
  'custom:aik-de-codigo'?: string;
  'custom:aik-zo-codigo'?: string;

  email: string;
  email_verified: boolean;
  event_id: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  locale: string;
  name: string;
  origin_jti: string;
}

/**
 * Options para UI (Select, DataTable) - Compatible con Ant Design 5.x y React 19
 */
export const SalesUserRoleOptions: ILabelValuePair<SalesUserRoleEnum>[] = [
  { label: 'Root', value: SalesUserRoleEnum.ROOT },
  { label: 'Administrador', value: SalesUserRoleEnum.ADMINISTRADOR },
  { label: 'Vendedor', value: SalesUserRoleEnum.VENDEDOR },
  { label: 'Cajero', value: SalesUserRoleEnum.CAJERO },
  { label: 'Administración', value: SalesUserRoleEnum.ADMINISTRACION },
  { label: 'Marketing', value: SalesUserRoleEnum.MARKETING },
  { label: 'Depósito', value: SalesUserRoleEnum.DEPOSITO },
];

export const SalesUserStatusOptions: ILabelValuePair<SalesUserStatusEnum>[] = [
  { label: 'Activo', value: SalesUserStatusEnum.Activo },
  { label: 'Inactivo', value: SalesUserStatusEnum.Inactivo },
];