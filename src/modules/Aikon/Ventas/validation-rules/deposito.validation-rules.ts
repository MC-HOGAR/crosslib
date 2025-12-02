
/** Reglas de validación para la entidad aikon_deposito */
export const DEPOSITO_VALIDATION_RULES = {
  CODIGO: {
    FIELD_NAME: 'aik_de_codigo',
    MAX_LENGTH: 10,
    MIN_LENGTH: 1,
    PATTERN: /^[0-9]+$/,
    DESCRIPTION: 'Código numérico del depósito',
    ERROR_MESSAGES: {
      REQUIRED: 'El código de depósito es obligatorio',
      INVALID_FORMAT: 'El código de depósito debe contener solo números',
      MAX_LENGTH: `El código de depósito no puede exceder 10 caracteres`,
      MIN_LENGTH: 'El código de depósito debe tener al menos 1 carácter'
    }
  }
} as const;