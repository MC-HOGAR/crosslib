/** Reglas de validación para la entidad aikon_vendedores */
export const VENDEDORES_VALIDATION_RULES = {
  CODIGO: {
    FIELD_NAME: 'ven_codigo',
    MAX_LENGTH: 20,
    MIN_LENGTH: 1,
    PATTERN: /^[0-9]+$/,
    DESCRIPTION: 'Código numérico del vendedor',
    ERROR_MESSAGES: {
      REQUIRED: 'El código de vendedor es obligatorio',
      INVALID_FORMAT: 'El código de vendedor debe contener solo números',
      MAX_LENGTH: 'El código de vendedor no puede exceder 20 caracteres',
      MIN_LENGTH: 'El código de vendedor debe tener al menos 1 carácter'
    }
  }
} as const;