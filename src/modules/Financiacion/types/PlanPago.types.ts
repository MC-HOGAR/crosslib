import { ServicioPago } from './ServicioPagos.types'
import { Tarjeta } from './Tarjetas.types'
import { Banco } from './Bancos.types'

export interface PlanPago {
    id: number;
    comentariosWeb: string | null;
    comentarios: string | null;
    cantidad_cuotas: number;
    coeficiente_recargo_descuento: string;
    porcentaje_reintegro: string | null;
    activo: boolean;
    badge_img_url: string | null;
    fecha_desde_valido: string | null;
    fecha_hasta_valido: string | null;
    created_at: string;
    updated_at: string;
    servicio_pago_id: number;
    tarjeta_id: number;
    banco_id: number;
}

export type PlanPagoIncludingServicioPago = PlanPago & { finan_servicio_pago: ServicioPago } 

export type PlanPagoIncludingTarjeta = PlanPago & { finan_tarjeta: Tarjeta }

export type PlanPagoIncludingBanco = PlanPago & { finan_banco: Banco }

export type PlanPagoIncludingAll = PlanPagoIncludingServicioPago & PlanPagoIncludingTarjeta & PlanPagoIncludingBanco