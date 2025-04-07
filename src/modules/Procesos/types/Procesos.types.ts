interface TipoProcesoInfo {
    id: number
    nombre: NOMBRES_TIPO_PROCESOS
    descripcion: string
}

const TipoProcesoProcesoSincronizacionConAikonCompleto: TipoProcesoInfo = {
    id: 1,
    nombre: 'ProcesoSincronizacionConAikonCompleto',
    descripcion: `
        Se hace un backup completo antes de ejecutar este proceso. Se sincroniza en el siguiente orden: Marca, Referencia01, Referencia02, Familia, Articulo y sus Precios
    `
}

const TipoProcesoSincronizacionArticuloInfoRelevante: TipoProcesoInfo = {
    id: 2,
    nombre: 'ProcesoSincronizacionArticuloInfoRelevante',
    descripcion: `Se sincronizan los atributos escenciales del artículo para mostrar en el ecommerce.`
}

const TipoProcesoRecalcularPrecios: TipoProcesoInfo = {
    id: 3,
    nombre: 'ProcesoRecalcularPrecios',
    descripcion: `Se recalculan los precios de los artículos.`
}
export type IDS_TIPO_PROCESOS = 1 | 2 | 3
export type NOMBRES_TIPO_PROCESOS = 'ProcesoSincronizacionConAikonCompleto' | 'ProcesoSincronizacionArticuloInfoRelevante' | 'ProcesoRecalcularPrecios'
export type SYSTEM_PROCESS_STATE_ALLOWED_VALUES = 'EXECUTING' | 'NOT_EXECUTING';

Object.freeze(TipoProcesoProcesoSincronizacionConAikonCompleto)
Object.freeze(TipoProcesoSincronizacionArticuloInfoRelevante)
Object.freeze(TipoProcesoRecalcularPrecios)

// Step names ProcesoInfo (se usan al iniciar y finalizar el proceso)
enum StepNameProcesoInfoInicioFin {
    IniciarProcesoInfo = "IniciarProcesoInfo",
    FinalizarProcesoInfo = "FinalizarProcesoInfo"
}

// Step names ProcesoSincronizacionConAikonCompleto
enum StepNameProcesoInfoDetalleSincronizacionConAikonCompleto {
    ObtenerToken = "ObtenerToken",
    PrepararSincronizacionMarcas = "PrepararSincronizacionMarcas",
    PrepararSincronizacionCategorias = "PrepararSincronizacionCategorías",
    PrepararSincronizacionRubros = "PrepararSincronizacionRubros",
    PrepararSincronizacionFamilias = "PrepararSincronizacionFamilias",
    PrepararSincronizacionArticulos = "PrepararSincronizacionArtículos",
    EjecutarSincronizacionMarcas = "EjecutarSincronizacionMarcas",
    EjecutarSincronizacionCategorías = "EjecutarSincronizacionCategorías",
    EjecutarSincronizacionRubros = "EjecutarSincronizacionRubros",
    EjecutarSincronizacionFamilias = "EjecutarSincronizacionFamilias",
    EjecutarSincronizacionArticulos = "EjecutarSincronizacionArtículos"
}

// Step Names ProcesoSincronizacionArticuloInfoRelevante
enum StepNameProcesoInfoDetalleProcesoSincronizacionArticuloInfoRelevante {
    ObtenerToken = "ObtenerToken",
    PrepararSincronizacionArticulosInfoRelevante = "PrepararSincronizacionArticulosInfoRelevante",
    EjecutarSincronizacionArticulosInfoRelevante = "EjecutarSincronizacionArticulosInfoRelevante"
}

// Step Names ProcesoRecalcularPrecios
enum StepNameProcesoInfoDetalleProcesoRecalcularPrecios {
    ObtenerArticuloPrecioConArticulo = "ObtenerArticuloPrecioConArticulo",
    HacerRecalculosYPrepararUpdate = "HacerRecalculosYPrepararUpdates",
    EjecutarUpdates = "EjecutarUpdates"
}

export type PROCESO_INFO_DETALLE_STEP_NAMES = StepNameProcesoInfoDetalleSincronizacionConAikonCompleto | StepNameProcesoInfoDetalleProcesoSincronizacionArticuloInfoRelevante | StepNameProcesoInfoDetalleProcesoRecalcularPrecios | StepNameProcesoInfoInicioFin

enum EstadoEjecucion {
    Procesando = "Procesando",
    Finalizado = "Finalizado"
}

export {
    TipoProcesoProcesoSincronizacionConAikonCompleto,
    TipoProcesoSincronizacionArticuloInfoRelevante,
    TipoProcesoRecalcularPrecios,
    StepNameProcesoInfoDetalleSincronizacionConAikonCompleto,
    StepNameProcesoInfoDetalleProcesoSincronizacionArticuloInfoRelevante,
    StepNameProcesoInfoDetalleProcesoRecalcularPrecios,
    StepNameProcesoInfoInicioFin,
    EstadoEjecucion
}