/**
 * Origen de cancelación de una orden.
 * Se usa para diferenciar cancelaciones definitivas de fallos recuperables.
 * Los fallos de procesadora quedan cubiertos por el estado PAGO_FALLIDO — no necesitan origen.
 */
export type OrigenCancelacion =
    | 'MOTOR_REGLAS'       // Validación del motor de reglas al confirmar el pago
    | 'TIMEOUT_PAGO'       // Cancelación automática por el cron (24hs sin pago)
    | 'CANCELACION_MANUAL' // Cancelación manual por el operador (feature futura)
    | null

/**
 * Máximo de reintentos de pago permitidos sobre una orden en estado PAGO_FALLIDO.
 * Al alcanzar este límite, el botón "Reintentar pago" desaparece.
 */
export const MAX_REINTENTOS_PAGO = 7

/**
 * Tiempo límite en horas para pagar una orden desde su creación (created_at).
 * Aplica tanto a PENDIENTE_PAGO como a PAGO_FALLIDO.
 * Pasado este tiempo, el cron cancela la orden automáticamente.
 */
export const HORAS_LIMITE_PAGO = 24