/**
 * @deprecated Usar SucursalStorefront. Este tipo corresponde a la fuente Firestore
 * que será eliminada. Remover una vez que storefront y todos los consumidores estén actualizados.
 */
export interface SucursalData {
    ciudadProvincia: string
    direccion: string
    email: string
    googleMapEmbed: string
    googleMapLink: string
    nombre: string
    posicion: number
    wspLink: string
    wspText: string
    horarios: SucursalHorario
}

interface SucursalHorario {
    lunesViernes: string
    sabados: string
}

interface SucursalHorario {
    lunesViernes: string
    sabados: string
}

/** Refleja la respuesta del endpoint GET /public-info/sucursales */
export interface SucursalStorefront {
    nombre_web: string | null
    google_map_embed: string | null
    google_map_link: string | null
    wsp_link: string | null
    wsp_texto: string | null /** Texto amigable visible dentro del <a> del link WhatsApp */
    posicion_web: number | null
    horario_lun_vier_manana: string | null
    horario_lun_vier_tarde: string | null
    horario_sab_manana: string | null
    horario_sab_tarde: string | null
    email: string
    
    // Campos internos expuestos para display web
    direccion_texto: string | null
    localidad: {
        nombre: string
        provincia: { nombre: string }
    }
}