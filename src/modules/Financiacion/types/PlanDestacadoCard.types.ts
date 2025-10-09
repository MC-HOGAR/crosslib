import type { PlanPago } from './PlanPago.types'
export interface PlanDestacadoCard {
    aik_ar_codigo: string;
    plan_de_pago_id: number | null;
    createdAt: string;
    updatedAt: string;
}

export interface PlanDestacadoCardIncludingPlanDePago extends PlanDestacadoCard{
    finan_plan_de_pago: PlanPago
}