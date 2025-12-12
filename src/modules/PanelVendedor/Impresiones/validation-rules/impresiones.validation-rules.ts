/** Reglas de validación para el módulo de Impresiones */
export const IMPRESIONES_VALIDATION_RULES = {
  CODIGO_ARTICULO: {
    FIELD_NAME: 'codigo_articulo',
    LENGTH: 8,
    PATTERN: /^[0-9]{8}$/,
    DESCRIPTION: 'Código de artículo Aikon (8 dígitos)',
    ERROR_MESSAGES: {
      REQUIRED: 'El código de artículo es obligatorio',
      INVALID_FORMAT: 'El código debe ser un string numérico de 8 caracteres',
      NOT_FOUND: 'No se encontró un artículo con ese código',
      NOT_ACTIVE: 'El artículo no está activo para web'
    }
  },
  
  PLAN_DESTACADO: {
    FIELD_NAME: 'plan_destacado_id',
    DESCRIPTION: 'ID del plan destacado seleccionado',
    ERROR_MESSAGES: {
      REQUIRED: 'Debe seleccionar un plan destacado para este artículo',
      INVALID: 'El plan seleccionado no es válido para este artículo',
      NOT_FOUND: 'No se encontró el plan destacado especificado'
    }
  },
  
  PLANTILLA: {
    MAX_ARTICULOS: {
      A4_COMPLETO: 1,
      A4_MEDIO: 2,
      A4_CUARTO: 4,
      ETIQUETA_AUTOADHESIVA: 0 // Por definir
    },
    ERROR_MESSAGES: {
      MAX_REACHED: 'Has alcanzado el número máximo de artículos para esta plantilla',
      MIN_REQUIRED: 'Debes agregar al menos un artículo'
    }
  }
} as const;