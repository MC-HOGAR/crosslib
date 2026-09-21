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

/**
 * Días de la semana en que corre un plan de pago.
 *
 * Los identificadores van sin tilde ni eñe (`MIERCOLES`, `SABADO`); las abreviaturas que
 * ve el usuario —`MIE`, `SÁB`— son de presentación y las arma cada frontend.
 *
 * Un plan **sin días declarados corre todos los días**, que es el comportamiento de los
 * planes anteriores a esta capacidad. La lista vacía NUNCA significa "no corre nunca": si
 * lo significara, una consulta que se olvide de traer los días apagaría un plan en
 * producción sin que nadie se entere.
 *
 * El domingo existe en el enum aunque la tienda física no abra: un plan exclusivo de la
 * compra web sí puede correr domingo.
 */
export enum DiaSemana {
    LUNES = 'LUNES',
    MARTES = 'MARTES',
    MIERCOLES = 'MIERCOLES',
    JUEVES = 'JUEVES',
    VIERNES = 'VIERNES',
    SABADO = 'SABADO',
    DOMINGO = 'DOMINGO',
}

/**
 * Cuándo corre un plan, y si corre hoy.
 *
 * `dias_semana` llega siempre **ordenado de lunes a domingo**, sin importar en qué orden se
 * declararon los días, y vacío cuando el plan corre todos los días.
 *
 * `disponible_hoy` NO es una columna: lo resuelve el **backend** en zona horaria de
 * Argentina y viaja ya resuelto. El cliente no lo recalcula. Va así para que las tres
 * superficies que muestran planes —storefront, calculadora del panel vendedor y selector
 * de presupuesto— coincidan siempre, y para que el storefront no arriesgue un hydration
 * mismatch entre el render del servidor y el del navegador: el día correcto es el de la
 * tienda, no el del reloj del visitante.
 */
export type DisponibilidadPorDia = {
    dias_semana: DiaSemana[];
    disponible_hoy: boolean;
}

export interface PlanPago extends DisponibilidadPorDia {
    id: number;
    comentariosWeb: string | null;
    comentarios: string | null;
    /**
     * Aclaración del plan dirigida al vendedor, distinta de `comentariosWeb` (de cara
     * al cliente) y de `comentarios` (nota interna del administrador). Es un dato
     * operativo interno: sólo se lee en la calculadora del panel vendedor y NO viaja
     * por la API pública del storefront.
     */
    comentarios_portal_vendedor: string | null;
    cantidad_cuotas: number;
    coeficiente_recargo_descuento: string;
    porcentaje_reintegro: string | null;
    activo: boolean;
    mostrar_en_calculadora: boolean;
    badge_img_url: string | null;
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
    /**
     * Habilita el plan para el checkout de Fiserv. Sólo puede estar en `true` con canal
     * `WEB` o `TODOS_LOS_CANALES`. `null` es el estado de los planes anteriores a Fiserv,
     * y se trata igual que `false`.
     */
    habilitar_pago_online_fiserv: boolean | null;
    /**
     * Store de Fiserv con el que se cobra el plan, del tipo de su tarjeta. Es un dato
     * interno de panel-interno: NO SHALL viajar por la API pública ni por la del panel
     * vendedor, que sigue mostrando sólo el número de comercio de Clover.
     */
    fiserv_connect_store_id: number | null;
}

/**
 * Tipo de un store de Fiserv Checkout Connect. No existe un tipo que procese crédito y
 * débito a la vez. Unión de literales, como sale de Prisma.
 */
export type FiservConnectStoreTipo = 'UNICAMENTE_CREDITO' | 'UNICAMENTE_DEBITO'

/**
 * El store de Fiserv tal como se muestra junto a un plan en panel-interno. Varios stores
 * pueden compartir número de comercio, así que se identifica por `nombre` y `store_id`.
 * Nunca lleva el Shared Secret.
 */
export type FiservConnectStorePlan = {
    id: number;
    nombre: string;
    /** El "storename" de Fiserv. */
    store_id: string;
    tipo: FiservConnectStoreTipo;
    activo: boolean;
    nro_comercio_online: { id: number; nro_comercio: string };
}

export type PlanPagoIncludingFiservConnectStore = PlanPago & { fiserv_connect_store: FiservConnectStorePlan | null }

/**
 * Lo que la API **pública** de financiación emite de un plan: exactamente lo que el
 * storefront consume, ni un campo más.
 *
 * Existe para que el `select` del endpoint público se pueda tipar contra algo. Sin
 * eso, el `findMany` devuelve la fila entera y cada columna nueva del modelo —un
 * comentario interno, un número de comercio— se publica sola en mchogar.com.
 *
 * Es una **lista blanca**: para que un campo se publique hay que agregarlo acá a
 * propósito. Una lista negra (`Omit`) habría que acordarse de actualizarla.
 *
 * Va partido en dos porque no todo lo que emite la API es una columna. Contra
 * `PlanPagoPublicoColumnas` se tipa el `select` del endpoint, y ahí sigue valiendo la
 * garantía original: una columna nueva del modelo no se publica sola. `PlanPagoPublico` le
 * suma los campos derivados de `DisponibilidadPorDia`, que ninguna columna puede llenar y
 * que por eso no tienen lugar en el `select`.
 */
export type PlanPagoPublicoColumnas = Pick<
  PlanPago,
  | 'id'
  | 'cantidad_cuotas'
  | 'coeficiente_recargo_descuento'
  | 'porcentaje_reintegro'
  | 'comentariosWeb'
  | 'canal_venta'
  | 'badge_img_url'
>

export type PlanPagoPublico = PlanPagoPublicoColumnas & DisponibilidadPorDia

/**
 * Lo que la API **del panel vendedor** emite de un plan: el plan completo más los dos
 * datos operativos que el vendedor necesita para cobrar.
 *
 * Los dos campos vienen aplanados y no anidados como los devuelve Prisma: `nro_comercio`
 * cuelga del plan y `nombreTerminalCaptura` de su servicio de pago, pero para la fila de
 * la calculadora son dos datos del mismo renglón y se leen juntos.
 *
 * Este tipo NO SHALL viajar por ningún endpoint sin autenticar.
 */
export type PlanPagoVendedor = PlanPago & {
  /** Número de comercio del plan. `null` si el plan no tiene uno asignado. */
  nro_comercio: string | null
  /** Terminal de captura del servicio de pago del plan. `null` si no está cargada. */
  nombreTerminalCaptura: string | null
}

/**
 * Los datos operativos de un plan, leídos **en su estado actual**, para el bloque del
 * detalle del presupuesto del panel vendedor.
 *
 * No sale del `plan_snapshot` del presupuesto a propósito: el snapshot congela lo que se
 * le prometió al cliente —cuotas, coeficiente, servicio, tarjeta, banco—, y esto responde
 * otra pregunta, que es del presente: *¿con qué terminal y qué número de comercio se cobra
 * esto ahora?*. Si alguien corrige una terminal mal cargada, el vendedor tiene que ver la
 * corregida.
 *
 * Que estos campos **no** entren a `PlanSnapshot` es lo que mantiene al PDF del presupuesto
 * y al email del cliente fuera por construcción: los dos leen sólo del snapshot.
 *
 * Este tipo NO SHALL viajar por ningún endpoint sin autenticar.
 */
export type DatosOperativosPlan = {
  /** Terminal de captura del servicio de pago del plan. `null` si no está cargada. */
  nombreTerminalCaptura: string | null
  /** Número de comercio del plan. `null` si el plan no tiene uno asignado. */
  nro_comercio: string | null
  /** Aclaración del plan dirigida al vendedor. `null` si no está cargada. */
  comentarios_portal_vendedor: string | null
  /** Canal de venta del plan. `null` significa "sin clasificar". */
  canal_venta: CanalVentaPlan | null
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
  comentarios_portal_vendedor: string | null;
  cantidad_cuotas: number;
  coeficiente_recargo_descuento: Decimal;
  porcentaje_reintegro: Decimal | null;
  activo: boolean;
  mostrar_en_calculadora: boolean;
  badge_img_url: string | null;
  // Los enums van como unión de literales y no como el enum de TS: esta interface
  // describe la fila que devuelve Prisma, y Prisma emite `$Enums.X`, que es una unión
  // de strings. Un enum de TS es nominal, así que "WEB" no le es asignable y el
  // consumidor no puede pasarle la fila sin castear.
  canal_venta: `${CanalVentaPlan}` | null;
  tipo_plan: `${TipoPlan}` | null;
  fecha_desde_valido: Date | null;
  fecha_hasta_valido: Date | null;
  created_at: Date;
  servicio_pago_id: number;
  tarjeta_id: number;
  banco_id: number;
  nro_comercio_id: number | null;
  habilitar_pago_online_fiserv: boolean | null;
  fiserv_connect_store_id: number | null;
}

/* Se utiliza en Presupuesto */
/**
 * No lleva `tipo_plan` a propósito: al presupuesto sólo entran planes generales.
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