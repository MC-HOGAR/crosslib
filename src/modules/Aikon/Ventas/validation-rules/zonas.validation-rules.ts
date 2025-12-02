/** Reglas de validación para la entidad aikon_zonas */
export const ZONAS_VALIDATION_RULES = {
  CODIGO: {
    FIELD_NAME: 'zo_codigo',
    MAX_LENGTH: 10,
    MIN_LENGTH: 1,
    PATTERN: /^[0-9]+$/,
    DESCRIPTION: 'Código numérico de la zona',
    ERROR_MESSAGES: {
      REQUIRED: 'El código de zona es obligatorio',
      INVALID_FORMAT: 'El código de zona debe contener solo números',
      MAX_LENGTH: 'El código de zona no puede exceder 10 caracteres',
      MIN_LENGTH: 'El código de zona debe tener al menos 1 carácter'
    }
  }
} as const;