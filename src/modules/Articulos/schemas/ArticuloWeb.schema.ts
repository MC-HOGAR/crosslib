import { z } from 'zod'

const ArticuloWebZodSchema = {
    aik_ar_codigo: z.string()
                    .regex(/^\d+$/, "aik_ar_codigo must be a string containing only numbers")
                    .min(1, "aik_ar_codigo is required and cannot be empty"),

    ar_descripcion_web: z.string(),

    ar_titulo: z.string(),
    
    ar_slug: z.string()
              .regex(/^$|^[a-z0-9-]+$/, "ar_slug must be a valid slug or an empty string. Only lowercase letters, numbers, and '-' are allowed."),
}

export {
    ArticuloWebZodSchema
}