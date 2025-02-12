interface TipoProcesoInfo {
    id: number
    nombre: string
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

Object.freeze(TipoProcesoProcesoSincronizacionConAikonCompleto)
Object.freeze(TipoProcesoSincronizacionArticuloInfoRelevante)

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
    EjecutarSincronizacionArticulosInfoRelevante = "EjecutarSincronizacionArticulosInfoRelevante",
    Right = "RIGHT",
}

enum EstadoEjecucion {
    Procesando = "Procesando",
    Finalizado = "Finalizado"
}

export {
    TipoProcesoProcesoSincronizacionConAikonCompleto,
    TipoProcesoSincronizacionArticuloInfoRelevante,
    StepNameProcesoInfoDetalleSincronizacionConAikonCompleto,
    StepNameProcesoInfoDetalleProcesoSincronizacionArticuloInfoRelevante,
    EstadoEjecucion
}