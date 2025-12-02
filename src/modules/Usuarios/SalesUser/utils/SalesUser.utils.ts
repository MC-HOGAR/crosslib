import { 
    SalesUserRoleEnum, 
    SALES_ROLES_AUDITABLES, 
    SalesUserRoleOptions, 
    SalesUserStatusEnum, 
    SalesUserStatusOptions } from './../types/SalesUser.types'
/**
 * Verificar si un rol debe ser auditado
 */
export function isRoleAuditable(role: SalesUserRoleEnum): boolean {
  return SALES_ROLES_AUDITABLES.includes(role as any);
}

/**
 * Verificar si un rol requiere depósito y zona. (tal vez tambien para codVendedorAikon)
 */
export function roleIsVendedorOrCajero(role: SalesUserRoleEnum): boolean {
  return role === SalesUserRoleEnum.VENDEDOR || role === SalesUserRoleEnum.CAJERO;
}

/**
 * Helper para obtener label de un rol
 */
export function getSalesUserRoleLabel(role: SalesUserRoleEnum): string {
  const option = SalesUserRoleOptions.find(opt => opt.value === role);
  return option?.label || role;
}

/**
 * Helper para obtener label de un status
 */
export function getSalesUserStatusLabel(status: SalesUserStatusEnum): string {
  const option = SalesUserStatusOptions.find(opt => opt.value === status);
  return option?.label || status;
}

export const VALIDATION_RULES = Object.freeze({
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 25,
    PATTERN: /^[a-zA-Z0-9._-]+$/
  },
  FULLNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
    PATTERN: /^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]*$/
  },
  DNI: {
    MIN_LENGTH: 4,
    MAX_LENGTH: 10,
    PATTERN: /^[0-9]*$/
  },
  TELEFONO: {
    MAX_LENGTH: 50,
    PATTERN: /^\d+-\d+$/      // Este pattern es para el campo completo. Ejem: "3492-435047" o "3493-498565".
  },
  AIK_VEN_CODIGO: {
    MAX_LENGTH: 20,
    PATTERN: /^[0-9]*$/
  },
  AIK_DE_CODIGO: {
    MAX_LENGTH: 10,
    PATTERN: /^[0-9]*$/
  },
  AIK_ZO_CODIGO: {
    MAX_LENGTH: 10,
    PATTERN: /^[0-9]*$/
  }
})

