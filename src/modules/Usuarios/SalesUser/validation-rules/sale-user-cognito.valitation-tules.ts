/**
 * Reglas de validación específicas para SalesUser en el servicio Cognito
 */
export const SALES_USER_COGNITO_VALIDATION_RULES = {

  PASSWORD: {
    FIELD_NAME: 'password',
    MIN_LENGTH: 8,
    PATTERN: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
    DESCRIPTION: 'Contraseña del servicio Cognito',
    ERROR_MESSAGES: {
      REQUIRED: 'La contraseña es obligatoria',
      INVALID_FORMAT: 'La contraseña debe contener al menos 1 mayúscula, 1 minúscula y 1 número',
      MIN_LENGTH: 'La contraseña debe tener al menos 8 caracteres',
    }
  },
} as const;