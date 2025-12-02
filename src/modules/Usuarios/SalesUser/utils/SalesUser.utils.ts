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

