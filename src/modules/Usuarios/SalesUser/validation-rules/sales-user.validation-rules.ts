import { 
  DEPOSITO_VALIDATION_RULES, 
  ZONAS_VALIDATION_RULES, 
  VENDEDORES_VALIDATION_RULES 
} from '@/modules/Aikon/Ventas/validation-rules';

/**
 * Reglas de validación específicas para SalesUser
 * Reutiliza las reglas de las entidades Aikon donde sea apropiado
 */
export const SALES_USER_VALIDATION_RULES = {
  // Información básica del usuario
  USERNAME: {
    FIELD_NAME: 'username',
    MAX_LENGTH: 50,
    MIN_LENGTH: 5,
    PATTERN: /^[a-zA-Z0-9_-]+$/,
    DESCRIPTION: 'Nombre de usuario único',
    ERROR_MESSAGES: {
      REQUIRED: 'El nombre de usuario es obligatorio',
      INVALID_FORMAT: 'El username solo puede contener letras, números, guiones y guiones bajos',
      MAX_LENGTH: 'El username no puede exceder 50 caracteres',
      MIN_LENGTH: 'El username debe tener al menos 5 caracteres',
      ALREADY_EXISTS: 'Este nombre de usuario ya está en uso'
    }
  },
  
  EMAIL: {
    FIELD_NAME: 'email',
    MAX_LENGTH: 100,
    DESCRIPTION: 'Correo electrónico válido',
    ERROR_MESSAGES: {
      REQUIRED: 'El email es obligatorio',
      INVALID_FORMAT: 'El formato del email no es válido',
      MAX_LENGTH: 'El email no puede exceder 100 caracteres',
      ALREADY_EXISTS: 'Este email ya está registrado'
    }
  },

  FULLNAME: {
    FIELD_NAME: 'fullname',
    MAX_LENGTH: 100,
    MIN_LENGTH: 3,
    PATTERN: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    DESCRIPTION: 'Nombre completo del usuario',
    ERROR_MESSAGES: {
      REQUIRED: 'El nombre completo es obligatorio',
      INVALID_FORMAT: 'El nombre solo puede contener letras y espacios',
      MAX_LENGTH: 'El nombre no puede exceder 100 caracteres',
      MIN_LENGTH: 'El nombre debe tener al menos 3 caracteres'
    }
  },

  DNI: {
    FIELD_NAME: 'dni',
    MAX_LENGTH: 10,
    MIN_LENGTH: 7,
    PATTERN: /^[0-9]+$/,
    DESCRIPTION: 'Documento Nacional de Identidad',
    ERROR_MESSAGES: {
      REQUIRED: 'El DNI es obligatorio',
      INVALID_FORMAT: 'El DNI debe contener solo números',
      MAX_LENGTH: 'El DNI no puede exceder 10 caracteres',
      MIN_LENGTH: 'El DNI debe tener al menos 7 caracteres',
      ALREADY_EXISTS: 'Este DNI ya está registrado'
    }
  },

  TELEFONO: {
    FIELD_NAME: 'telefono',
    MIN_LENGTH: 7,
    MAX_LENGTH: 20,
    PATTERN: /^\d+-\d+$/,
    DESCRIPTION: 'Número de teléfono (Formato "<cod_area>-<nro_tel>)"',
    ERROR_MESSAGES: {
      REQUIRED: 'El teléfono es obligatorio',
      INVALID_FORMAT: 'El teléfono debe contener solo números y símbolos válidos (+, -, (), espacios)',
      MAX_LENGTH: 'El teléfono no puede exceder 20 caracteres',
      MIN_LENGTH: 'El teléfono debe tener al menos 10 caracteres'
    }
  },

  // Referencias a entidades Aikon (reutilizando sus reglas)
  AIK_VEN_CODIGO: {
    ...VENDEDORES_VALIDATION_RULES.CODIGO,
    DESCRIPTION: 'Código del vendedor asignado (referencia a aikon_vendedores)',
    ERROR_MESSAGES: {
      ...VENDEDORES_VALIDATION_RULES.CODIGO.ERROR_MESSAGES,
      NOT_FOUND: 'El código de vendedor especificado no existe en Aikon',
      REQUIRED_FOR_ROLE: 'El código de vendedor es obligatorio para roles Vendedor y Cajero'
    }
  },

  AIK_DE_CODIGO: {
    ...DEPOSITO_VALIDATION_RULES.CODIGO,
    DESCRIPTION: 'Código del depósito asignado (referencia a aikon_deposito)',
    ERROR_MESSAGES: {
      ...DEPOSITO_VALIDATION_RULES.CODIGO.ERROR_MESSAGES,
      NOT_FOUND: 'El código de depósito especificado no existe en Aikon',
      REQUIRED_FOR_ROLE: 'El código de depósito es obligatorio para roles Vendedor y Cajero'
    }
  },

  AIK_ZO_CODIGO: {
    ...ZONAS_VALIDATION_RULES.CODIGO,
    DESCRIPTION: 'Código de zona asignada (referencia a aikon_zonas)',
    ERROR_MESSAGES: {
      ...ZONAS_VALIDATION_RULES.CODIGO.ERROR_MESSAGES,
      NOT_FOUND: 'El código de zona especificado no existe en Aikon',
      REQUIRED_FOR_ROLE: 'El código de zona es obligatorio para roles Vendedor y Cajero'
    }
  }
} as const;