// ─────────────────────────────────────────────────────────────────────────────
// Módulo: PanelVendedor / Ecommerce
// Tipos compartidos entre backend (NestJS) y frontend (panel-vendedor React)
// para la gestión operativa de órdenes ecommerce.
// ─────────────────────────────────────────────────────────────────────────────

// ── Enums ─────────────────────────────────────────────────────────────────────

export enum OrdenEstadoEnum {
    PENDIENTE_PAGO    = 'PENDIENTE_PAGO',
    PROCESANDO_PAGO   = 'PROCESANDO_PAGO',
    PAGO_FALLIDO      = 'PAGO_FALLIDO',
    PAGO_CONFIRMADO   = 'PAGO_CONFIRMADO',
    EN_PREPARACION    = 'EN_PREPARACION',
    LISTO_PARA_RETIRO = 'LISTO_PARA_RETIRO',
    EN_CAMINO         = 'EN_CAMINO',
    ENTREGADO         = 'ENTREGADO',
    CANCELADO         = 'CANCELADO',
}

export enum TipoEntregaEnum {
    RETIRO_SUCURSAL = 'RETIRO_SUCURSAL',
    ENVIO_DOMICILIO = 'ENVIO_DOMICILIO',
}

export enum ComprobanteOrdenTipoEnum {
    A = 'A',
    B = 'B',
    C = 'C',
    X = 'X',
}

export enum TipoPagoEnum {
    CREDITO = 'CREDITO',
    DEBITO  = 'DEBITO',
}

export enum PagoEstadoEnum {
    PENDIENTE       = 'PENDIENTE',
    AUTORIZADO      = 'AUTORIZADO',
    APROBADO        = 'APROBADO',
    RECHAZADO       = 'RECHAZADO',
    EN_PROCESO      = 'EN_PROCESO',
    REEMBOLSADO     = 'REEMBOLSADO',
    CONTRACARGO     = 'CONTRACARGO',
    EN_MEDIACION    = 'EN_MEDIACION',
}

// ── Snapshots de entrega (inmutables al momento de creación de la orden) ──────
export interface EntregaDomicilioSnapshot {
    localidad_id:  number;
    localidad:     string;
    provincia_id:  number;     
    provincia:     string;
    calle_nombre:  string;
    calle_numero:  string;
    piso_depto:    string | null;
    barrio:        string | null;
    codigo_postal: string | null;
    referencias:   string | null;
    tiempo_entrega_estimado: string | null;
}

export interface EntregaSucursalSnapshot {
    sucursal_id:      number;
    nombre:           string;
    localidad_id:     number;
    localidad:        string;
    provincia:        string;
    direccion_texto?: string;
}

// ── Entidades relacionadas ────────────────────────────────────────────────────

/** Cliente vinculado a la orden via ec_customer_user → cliente (CRM) */
export interface OrdenClienteInfo {
    /** ID del ec_customer_user */
    id:          number;
    cliente_id:        number;
    external_id:       string | null;
    /** DNI del cliente CRM */
    dni:         string;
    nombre:      string;
    apellido:    string;

    /** Teléfono completo (cod_area + numero) */
    tel_completo: string | null;
    email:       string;
    cliente_direccion: ClienteDireccion[];
}

export interface ClienteDireccion {
    id:                       number;
    alias:                    string | null;
    calle_nombre:             string;
    calle_numero:             string;
    piso_depto:               string | null;
    barrio:                   string | null;
    codigo_postal:            string | null;
    es_principal_envio:       boolean;
    es_principal_facturacion: boolean;
    tipo:                     'ENVIO' | 'FACTURACION' | 'REAL';
    localidad:                { id: number; nombre: string };
    provincia:                { id: number; nombre: string };
}

/** Ítem de la orden con precios snapshot */
export interface OrdenItem {
    id:                                  number;
    aik_ar_codigo:                       string;
    titulo:                              string;
    cantidad:                            number;
    /** Precio efectivamente cobrado (crédito o débito según tipo de pago) */
    precio_pagado_unitario_snapshot:     number;
    /** Precio lista crédito al momento de la orden */
    precio_credito_unitario_snapshot:    number;
    /** Precio web débito al momento de la orden */
    precio_debito_unitario_snapshot:     number;
    subtotal:                            number;
}

export interface PagoMercadoPagoDetalle {
    mp_authorization_code:    string | null;
    mp_installments:          number | null;
    mp_installment_amount:    number | null;
    mp_transaction_amount:    number | null;
    mp_card_first_six_digits: string | null;
    mp_card_last_four_digits: string | null;
    mp_payment_method_id:     string | null;
    mp_payment_type_id:       string | null;
    mp_cardholder_name:       string | null;
    mp_card_expiration_month: number | null;
    mp_card_expiration_year:  number | null;
    mp_card_id_type:          string | null;
    mp_card_id_number:        string | null;
}

/** Registro de pago asociado a la orden */
export interface OrdenPago {
    id:         number;
    estado:     PagoEstadoEnum;
    monto:      number;
    tipo_pago:  TipoPagoEnum;
    proveedor:  string;
    nro_cupon:  number | null;
    nro_lote:   string | null;
    created_at: string;

    /** Presente solo en el detalle de orden — null en listados */
    mercadopago: PagoMercadoPagoDetalle | null;
}

// ── Respuesta de listado (Seguimiento + Órdenes generales) ────────────────────

export interface OrdenEcommerceListado {
    id:                       number;
    estado:                   OrdenEstadoEnum;
    tipo_entrega:             TipoEntregaEnum;
    subtotal:                 number;
    costo_envio:              number;
    total:                    number;
    facturado:                boolean;
    comprobante_factura_key:  string | null;
    fecha_entregado:          string | null;
    observaciones:            string | null;
    /** Snapshot del nombre al momento de la orden */
    nombre_cliente_snapshot:  string;
    email_cliente_snapshot:   string;
    telefono_cliente_snapshot: string | null;
    created_at:               string;
    updated_at:               string;
    /** Cliente CRM con DNI — via ec_customer_user → cliente */
    customer_user: {
        id:      number;
        cliente: OrdenClienteInfo;
    };
    sucursal:  { id: number; nombre: string } | null;
    zona_envio: { id: number; nombre: string } | null;
    items: OrdenItem[];
    /** Último pago registrado — para mostrar tipo_pago (crédito/débito) en los ítems expandibles */
    pagos:     OrdenPago[];
}

// ── Respuesta de detalle ──────────────────────────────────────────────────────

export interface OrdenEcommerceDetalle extends Omit<OrdenEcommerceListado, '_count'> {
    carrito_id:                      number | null;
    envio_gratis:                    boolean;
    notas_cliente:                   string | null;
    comprobante_codigo:              string | null;
    comprobante_sucursal:            number | null;
    comprobante_nro_fiscal:          string | null;
    comprobante_tipo:                ComprobanteOrdenTipoEnum | null;
    /** URL pública CloudFront del PDF — calculada por el backend */
    comprobante_factura_url:         string | null;
    entrega_domicilio_snapshot:      EntregaDomicilioSnapshot | null;
    entrega_sucursal_snapshot:       EntregaSucursalSnapshot | null;
    items:                           OrdenItem[];
}

// ── Respuesta paginada genérica ───────────────────────────────────────────────

export interface OrdenEcommercePaginatedResponse {
    data:   OrdenEcommerceListado[];
    meta: {
        total:      number;
        skip:       number;
        take:       number;
        totalPages: number;
    };
}

// ── Payloads de request (frontend → backend) ──────────────────────────────────

export interface CambiarEstadoOrdenPayload {
    estado:           OrdenEstadoEnum;
    /** Solo requerido cuando estado = ENTREGADO. Formato ISO date string. */
    fecha_entregado?: string;
}

export interface CargarFacturaOrdenPayload {
    comprobante_codigo:      string;
    comprobante_sucursal:    string;
    comprobante_nro_fiscal:  string;
    comprobante_tipo:        ComprobanteOrdenTipoEnum;
    
    /** S3 key del PDF — obligatorio para que facturado = true */
    comprobante_factura_key?: string;
}

export interface SolicitarUrlSubidaFacturaPayload {
    fileName:    string;
    contentType: 'application/pdf';
}

export interface UrlSubidaFacturaResponse {
    signedUrl: string;
    s3Key:     string;
}

// ── Params de query (frontend → backend) ─────────────────────────────────────

export interface FiltrosSeguimientoOrdenesParams {
    estado?:       OrdenEstadoEnum;
    /** Coma-separado para múltiples estados. Ej: "LISTO_PARA_RETIRO,EN_CAMINO" */
    estados?:      string;
    /** Filtra por semana actual (lunes–domingo). Solo para tab ENTREGADO. */
    semanaActual?: boolean;
    skip?:         number;
    take?:         number;
}

export interface FiltrosOrdenesParams {
    id?:                number;
    /** Coma-separado. Ej: "PAGO_CONFIRMADO,EN_PREPARACION" */
    estados?:           string;
    tipo_entrega?:      TipoEntregaEnum;
    sucursal_retiro_id?: number;
    customer_user_id?:  number;
    /** Búsqueda parcial sobre email_cliente_snapshot */
    email_cliente?:     string;
    facturado?:         boolean;
    /** ISO date string. Filtro sobre created_at */
    fecha_desde?:       string;
    fecha_hasta?:       string;
    skip?:              number;
    take?:              number;
}

export interface TicketPagoMpDetalle {
    mp_authorization_code:    string | null;
    mp_installments:          number | null;
    mp_installment_amount:    number | null;
    mp_transaction_amount:    number | null;
    mp_card_last_four_digits: string | null;
    mp_payment_method_id:     string | null;
    mp_cardholder_name:       string | null;
    mp_card_id_type:          string | null;
    mp_card_id_number:        string | null;
}

export interface TicketPagoPago {
    id:          number;
    estado:      PagoEstadoEnum;
    monto:       number;
    tipo_pago:   TipoPagoEnum;
    nro_cupon:   number | null;
    nro_lote:    string | null;
    mercadopago: TicketPagoMpDetalle | null;
}

export interface OrdenTicketPagoData {
    id:         number;
    created_at: string;
    pagos:      TicketPagoPago[];   // máximo 1 — el pago APROBADO
}

export interface OrdenFacturaData {
  id:                      number;
  estado:                  OrdenEstadoEnum;
  facturado:               boolean;
  comprobante_codigo:      string | null;
  comprobante_sucursal:    string | null;
  comprobante_nro_fiscal:  string | null;
  comprobante_tipo:        ComprobanteOrdenTipoEnum | null;
  comprobante_factura_key: string | null;
  observaciones:           string | null;
}

// ── Labels UI — útiles tanto en frontend como en lógica de negocio ───────────

export const ORDEN_ESTADO_LABEL: Record<OrdenEstadoEnum, string> = {
    [OrdenEstadoEnum.PENDIENTE_PAGO]:    'Pendiente de pago',
    [OrdenEstadoEnum.PROCESANDO_PAGO]:   'Procesando pago',
    [OrdenEstadoEnum.PAGO_FALLIDO]:      'Pago fallido',
    [OrdenEstadoEnum.PAGO_CONFIRMADO]:   'Pago confirmado',
    [OrdenEstadoEnum.EN_PREPARACION]:    'En preparación',
    [OrdenEstadoEnum.LISTO_PARA_RETIRO]: 'Listo para retiro',
    [OrdenEstadoEnum.EN_CAMINO]:         'En camino',
    [OrdenEstadoEnum.ENTREGADO]:         'Entregado',
    [OrdenEstadoEnum.CANCELADO]:         'Cancelado',
};

export const TIPO_ENTREGA_LABEL: Record<TipoEntregaEnum, string> = {
    [TipoEntregaEnum.RETIRO_SUCURSAL]: 'Retiro en sucursal',
    [TipoEntregaEnum.ENVIO_DOMICILIO]: 'Envío a domicilio',
};

export const TIPO_PAGO_LABEL: Record<TipoPagoEnum, string> = {
    [TipoPagoEnum.CREDITO]: 'Crédito',
    [TipoPagoEnum.DEBITO]:  'Débito',
};

export const PAGO_ESTADO_LABEL: Record<PagoEstadoEnum, string> = {
    [PagoEstadoEnum.PENDIENTE]:    'Pendiente',
    [PagoEstadoEnum.AUTORIZADO]:   'Autorizado',
    [PagoEstadoEnum.APROBADO]:     'Aprobado',
    [PagoEstadoEnum.RECHAZADO]:    'Rechazado',
    [PagoEstadoEnum.EN_PROCESO]:   'En proceso',
    [PagoEstadoEnum.REEMBOLSADO]:  'Reembolsado',
    [PagoEstadoEnum.CONTRACARGO]:  'Contracargo',
    [PagoEstadoEnum.EN_MEDIACION]: 'En mediación',
}