import { z } from 'zod'

export const InternalUserZodSchema = {
    username: z.string({ message: 'Usuario: obligatorio. [username is a required string]' }).min(5, { message: 'Usuario: Al menos 5 caracteres. [username should have at least 5 characters]' }),

    email: z.string({ message: 'Email: debe ser un string. [email should be a string]' }).min(1, { message: 'Email: obligatorio. [email is required]' }).email({ message: 'Email: Formato de email inválido. [email has invalid format]' }),

    fullname: z.string({ message: 'Nombre completo: obligatorio' }).min(5, { message: 'Nombre completo: Al menos 5 caracteres.' }),

    group: z.enum(['root', 'administrator', 'operator', 'marketing', 'seller', 'vendor', 'customer', 'user', 'guest'], {
        required_error: 'El campo grupo es obligatorio. [group is required]',
        invalid_type_error: 'grupo debe ser un string. [group has invalid type. only string]',
    }),
    
    status: z.enum(['Active', 'Suspended'], {
        required_error: 'el campo estado es obligatorio. [status is required]',
        invalid_type_error: 'estado debe ser un string. [status has invalid type. only string]'
    })
}