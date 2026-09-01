import { ServicioPago } from './ServicioPagos.types'
import { Tarjeta } from './Tarjetas.types'
import { Banco } from './Bancos.types'
import { NroComercio } from './NroComercio.types'
import Decimal from 'decimal.js'

/**
 * Canal de venta en el que vale un plan de pago.
 * Un plan pertenece siempre a un canal específico o a todos: el modelo no
 * representa combinaciones parciales. Si se suma un canal nuevo, se agrega un
 * único valor y los planes en TODOS_LOS_CANALES lo incluyen por definición.
 * `null` en la columna significa "sin clasificar", que NO es lo mismo que TODOS_LOS_CANALES.
 */
export enum CanalVentaPlan {
    WEB = 'WEB',
    TIENDA_FISICA = 'TIENDA_FISICA',
    TODOS_LOS_CANALES = 'TODOS_LOS_CANALES',
}

/**
 * Clasificación de un plan de pago según a qué artículos alcanza.
 * PLAN_GENERAL vale para todo el catálogo —el comportamiento histórico—;
 * PLAN_ESPECIFICO vale sólo para los artículos a los que se lo vincule.
 * `null` en la columna significa "sin clasificar", que NO es un tercer modo de
 * funcionamiento: es el estado transitorio de los planes anteriores a esta
 * capacidad, y un plan sin clasificar no participa de ninguna superficie que
 * exija una clasificación.
 * El tipo es inmutable: se fija al crear el plan y no entra en la edición.
 */
export enum TipoPlan {
    PLAN_GENERAL = 'PLAN_GENERAL',
    PLAN_ESPECIFICO = 'PLAN_ESPECIFICO',
}

export interface PlanPago {
    id: number;
    comentariosWeb: string | null;
    comentarios: string | null;
    cantidad_cuotas: number;
    coeficiente_recargo_descuento: string;
    porcentaje_reintegro: string | null;
    activo: boolean;
    mostrar_en_calculadora: boolean;
    /** Key de S3 de la imagen del bloque de planes destacados de la ficha de producto. */
    badge_img_url: string | null;
    /** Key de S3 de la imagen de la parte inferior de la card del listado. */
    imagen_key_card: string | null;
    canal_venta: CanalVentaPlan | null;
    tipo_plan: TipoPlan | null;
    fecha_desde_valido: string | null;
    fecha_hasta_valido: string | null;
    created_at: string;
    updated_at: string;
    servicio_pago_id: number;
    tarjeta_id: number;
    banco_id: number;
    nro_comercio_id: number;
}

export type PlanPagoIncludingServicioPago = PlanPago & { finan_servicio_pago: ServicioPago } 

export type PlanPagoIncludingTarjeta = PlanPago & { finan_tarjeta: Tarjeta }

export type PlanPagoIncludingBanco = PlanPago & { finan_banco: Banco }

export type PlanPagoIncludingNroComercio = PlanPago & { finan_nro_comercio: NroComercio }

export type PlanPagoIncludingAll = PlanPagoIncludingServicioPago & PlanPagoIncludingTarjeta & PlanPagoIncludingBanco & PlanPagoIncludingNroComercio

export enum EstadoPlanFiltro {
  ACTIVOS = 'activos',
  INACTIVOS = 'inactivos',
  AMBOS = 'ambos',
}

/**
 * Filtro por clasificación para el listado de planes del panel interno.
 * SIN_CLASIFICAR filtra por `tipo_plan IS NULL`, que no es un valor del enum
 * `TipoPlan`: es la ausencia de clasificación.
 */
export enum TipoPlanFiltro {
  GENERALES = 'generales',
  ESPECIFICOS = 'especificos',
  SIN_CLASIFICAR = 'sin_clasificar',
  TODOS = 'todos',
}

export interface PlanPagoPrisma {
  updated_at: Date;
  id: number;
  comentariosWeb: string | null;
  comentarios: string | null;
  cantidad_cuotas: number;
  coeficiente_recargo_descuento: Decimal;
  porcentaje_reintegro: Decimal | null;
  activo: boolean;
  mostrar_en_calculadora: boolean;
  /** Key de S3 de la imagen del bloque de planes destacados de la ficha de producto. */
  badge_img_url: string | null;
  /** Key de S3 de la imagen de la parte inferior de la card del listado. */
  imagen_key_card: string | null;
  canal_venta: CanalVentaPlan | null;
  tipo_plan: TipoPlan | null;
  fecha_desde_valido: Date | null;
  fecha_hasta_valido: Date | null;
  created_at: Date;
  servicio_pago_id: number;
  tarjeta_id: number;
  banco_id: number;
  nro_comercio_id: number | null;
}

/* Se utiliza en Presupuesto */
/**
 * No lleva `tipo_plan` ni `imagen_key_card` a propósito: al presupuesto sólo
 * entran planes generales, y la imagen que muestra es la de la ficha
 * (`badge_img_url`), no la de la card.
 */
export type PlanSnapshot = {
  id: number;
  comentariosWeb:                string | null;
  cantidad_cuotas:               number;
  coeficiente_recargo_descuento: string;   // Decimal serializado como string
  porcentaje_reintegro:          string | null;
  badge_img_url:                 string | null;
  fecha_desde_valido:            string | null;  // ISO string
  fecha_hasta_valido:            string | null;  // ISO string
  servicio_pago: {
    nombre:    string;
    nombreWeb: string;
  };
  tarjeta: {
    nombre:      string;
    nombreWeb:   string;
    tipo_tarjeta: 'CREDITO' | 'DEBITO';
  };
  banco: {
    nombre:    string;
    nombreWeb: string;
  };
}