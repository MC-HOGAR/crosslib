import type { PlanPago, PlanPagoPrisma } from './PlanPago.types'

export interface PlanDestacadoCardPrisma {
    aik_ar_codigo: string;
    plan_de_pago_id: number | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface PlanDestacadoCardPrismaIncludingPlanDePagoPrisma extends PlanDestacadoCardPrisma{
    finan_plan_de_pago: PlanPagoPrisma | null
}

export interface PlanDestacadoCard {
    aik_ar_codigo: string;
    plan_de_pago_id: number | null;
    createdAt: string;
    updatedAt: string;
}

export interface PlanDestacadoCardIncludingPlanDePago extends PlanDestacadoCard{
    finan_plan_de_pago: PlanPago | null
}