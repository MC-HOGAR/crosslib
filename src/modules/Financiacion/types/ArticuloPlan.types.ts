/**
 * Vínculo entre un artículo y un plan de pago específico.
 * Un artículo puede tener N planes específicos vinculados y un plan específico
 * puede estar vinculado a M artículos, sin tope en ninguna de las dos puntas.
 * El vínculo NO define el plan destacado en card del artículo: eso lo sigue
 * diciendo `finan_articulo_plan_destacado_card`, y el plan que se asigne ahí
 * tiene que ser uno de los vinculados.
 */
export interface ArticuloPlanPrisma {
    id: number;
    aik_ar_codigo: string;
    plan_de_pago_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface ArticuloPlan {
    id: number;
    aik_ar_codigo: string;
    plan_de_pago_id: number;
    created_at: string;
    updated_at: string;
}

/**
 * Vinculación y desvinculación masivas: N planes × M artículos en una sola
 * operación. Las dos son simétricas y toman la misma forma de pedido.
 */
export interface VinculacionPlanesArticulosRequest {
    codigosArticulos: string[];
    idsPlanes: number[];
}

/**
 * La vinculación es idempotente: repetir una combinación que ya existe no es un
 * error, se informa y se sigue.
 */
export interface VinculacionPlanesArticulosResponse {
    combinacionesSolicitadas: number;
    combinacionesCreadas: number;
    combinacionesYaExistentes: number;
}

/**
 * Un artículo que pierde su plan destacado en card porque se desvinculó el plan
 * que lo ocupaba. Alimenta tanto la advertencia previa como el reporte final.
 */
export interface ArticuloConPlanDestacadoCardAfectado {
    aik_ar_codigo: string;
    plan_de_pago_id: number;
}

/**
 * Previsualización de la desvinculación: se consulta ANTES de ejecutar, para
 * poder advertir al operador cuántos y cuáles artículos van a quedar sin plan
 * destacado en card. No modifica nada.
 */
export interface PrevisualizacionDesvinculacionResponse {
    articulosQuePierdenPlanDestacadoCard: ArticuloConPlanDestacadoCardAfectado[];
}

export interface DesvinculacionPlanesArticulosResponse {
    combinacionesSolicitadas: number;
    vinculosEliminados: number;
    articulosQuePerdieronPlanDestacadoCard: ArticuloConPlanDestacadoCardAfectado[];
}
