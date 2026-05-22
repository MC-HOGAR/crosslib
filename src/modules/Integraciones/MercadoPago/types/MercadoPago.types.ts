// ─── Tipos ────────────────────────────────────────────────────────────────────

export type MpStatus =
    | 'pending'
    | 'approved'
    | 'authorized'
    | 'in_process'
    | 'in_mediation'
    | 'rejected'
    | 'canceled'
    | 'refunded'
    | 'charged_back'

export type MpPaymentTypeId =
    | 'credit_card'
    | 'debit_card'
    | 'prepaid_card'
    | 'ticket'
    | 'digital_currency'
    | 'digital_wallet'
    | 'crypto_transfer'

// ─── Mapeo payment_method_id → nombre amigable ────────────────────────────────

export const MP_CARD_NAMES: Record<string, string> = {
    visa:        'Visa',
    master:      'Mastercard',
    amex:        'American Express',
    naranja:     'Naranja',
    cabal:       'Cabal',
    tarshop:     'Tarshop',
    diners:      'Diners Club',
    maestro:     'Maestro',
    debvisa:     'Visa Débito',
    debmaster:   'Mastercard Débito',
    debcabal:    'Cabal Débito',
    cencosud:    'Cencosud',
    argencard:   'Argencard',
    cordial:     'Cordial',
    cordobesa:   'Cordobesa',
    cmr:         'CMR',
}

// ─── Mapeo payment_type_id → nombre amigable ─────────────────────────────────

export const MP_PAYMENT_TYPE_NAMES: Record<string, string> = {
    credit_card:      'Tarjeta de crédito',
    debit_card:       'Tarjeta de débito',
    prepaid_card:     'Tarjeta prepaga',
    account_money:    'Dinero en cuenta',
    ticket:           'Pago en efectivo',
    atm:              'Cajero automático',
    bank_transfer:    'Transferencia bancaria',
    digital_currency: 'Cuotas sin tarjeta',
    digital_wallet:   'Billetera digital',
    crypto_transfer:  'Criptomonedas',
    voucher_card:     'Voucher',
}

// ─── Mapeo status_detail (cc_* y otros) → mensaje amigable ───────────────────
// Solo se muestran cuando el status_detail NO es 'accredited'

export const MP_STATUS_DETAIL_MESSAGES: Record<string, string> = {
    // Pagos aprobados / en proceso (no mostrar al usuario como error)
    accredited:                  '',  // pago acreditado — no mostrar
    partially_refunded:          'El pago fue parcialmente reembolsado.',
    pending_capture:             'El pago fue autorizado y está pendiente de captura.',
    offline_process:             'El pago está siendo procesado de manera diferida.',
    pending_contingency:         'Falla temporal. El pago será procesado en breve.',
    pending_review_manual:       'El pago está bajo revisión. Te notificaremos por email.',
    deferred_retry:              'El pago fue programado para reintentarse más tarde.',
    pending_waiting_transfer:    'Esperando que completes la transferencia bancaria en tu banco.',
    pending_waiting_payment:     'Esperando el pago en el punto de cobro seleccionado.',
    pending_challenge:           'Confirmación pendiente de tu banco.',

    // Rechazos por tarjeta (cc_*)
    cc_rejected_3ds_mandatory:          'Pago rechazado. Tu banco requiere verificación adicional.',
    cc_rejected_bad_filled_card_number: 'Número de tarjeta incorrecto. Revisá los datos ingresados.',
    cc_rejected_bad_filled_date:        'Fecha de vencimiento incorrecta. Revisá los datos ingresados.',
    cc_rejected_bad_filled_other:       'Datos de la tarjeta incorrectos. Revisá la información ingresada.',
    cc_rejected_bad_filled_security_code: 'Código de seguridad (CVV) incorrecto.',
    cc_rejected_blacklist:              'No podemos procesar pagos con esta tarjeta. Intentá con otra.',
    cc_rejected_call_for_authorize:     'Tu banco requiere que lo llames para autorizar el pago.',
    cc_rejected_card_disabled:          'Tarjeta inactiva. Comunicate con tu banco para activarla.',
    cc_rejected_duplicated_payment:     'Pago duplicado detectado. Ya existe un pago similar reciente.',
    cc_rejected_high_risk:              'Pago rechazado por seguridad. Intentá con otro medio de pago.',
    cc_rejected_insufficient_amount:    'Fondos insuficientes. Verificá el saldo disponible en tu tarjeta.',
    cc_rejected_invalid_installments:   'La cantidad de cuotas seleccionada no está disponible para esta tarjeta.',
    cc_rejected_max_attempts:           'Límite de intentos alcanzado. Intentá más tarde o con otra tarjeta.',
    cc_rejected_other_reason:           'El pago fue rechazado. Intentá con otra tarjeta o medio de pago.',
    cc_rejected_time_out:               'La transacción superó el tiempo límite. Intentá nuevamente.',
    cc_amount_rate_limit_exceeded:      'Superaste el límite de monto permitido por tu tarjeta.',

    // Rechazos generales
    bank_error:                  'El pago fue rechazado por un error con el banco.',
    rejected_high_risk:          'Pago rechazado por evaluación de riesgo.',
    rejected_insufficient_data:  'Faltan datos obligatorios para procesar el pago.',
    rejected_by_bank:            'Operación rechazada por el banco.',
    rejected_by_regulations:     'Pago rechazado por regulaciones.',
    rejected_by_biz_rule:        'Pago rechazado por reglas del procesador.',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Retorna el nombre amigable del payment_method_id.
 * Si no se encuentra, capitaliza la primera letra del código original.
 */
export function getMpCardName(methodId: string): string {
    return MP_CARD_NAMES[methodId]
        ?? (methodId.charAt(0).toUpperCase() + methodId.slice(1))
}

/**
 * Retorna el nombre amigable del payment_type_id.
 */
export function getMpPaymentTypeName(typeId: string): string {
    return MP_PAYMENT_TYPE_NAMES[typeId] ?? typeId
}

/**
 * Retorna el mensaje amigable para un status_detail.
 * Retorna null si es 'accredited' (no mostrar) o si no está mapeado.
 */
export function getMpStatusDetailMessage(statusDetail: string): string | null {
    if (statusDetail === 'accredited') return null
    return MP_STATUS_DETAIL_MESSAGES[statusDetail] ?? null
}

/**
 * Indica si un status_detail corresponde a un rechazo que debe mostrarse al usuario.
 */
export function isMpRejectionDetail(statusDetail: string): boolean {
    return statusDetail !== 'accredited' && statusDetail in MP_STATUS_DETAIL_MESSAGES
}