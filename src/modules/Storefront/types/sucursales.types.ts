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