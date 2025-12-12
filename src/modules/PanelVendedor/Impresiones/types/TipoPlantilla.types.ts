/**
 * Tipos de plantilla disponibles para impresiones
 */
export enum TipoPlantillaEnum {
  A4_COMPLETO = 'A4_COMPLETO',
  A4_MEDIO = 'A4_MEDIO',
  A4_CUARTO = 'A4_CUARTO',
  ETIQUETA_AUTOADHESIVA = 'ETIQUETA_AUTOADHESIVA'
}

/**
 * Metadata de cada tipo de plantilla
 */
export interface PlantillaMetadata {
  tipo: TipoPlantillaEnum;
  nombre: string;
  descripcion: string;
  maxArticulos: number;
  mostrarImagen: boolean;
  mostrarDatosCompletos: boolean;
  mostrarPlanes: boolean;
  maxPlanes?: number;
  requiereSeleccionPlan: boolean;
}

/**
 * Configuración de las plantillas disponibles
 */
export const PLANTILLAS_CONFIG: Record<TipoPlantillaEnum, PlantillaMetadata> = {
  [TipoPlantillaEnum.A4_COMPLETO]: {
    tipo: TipoPlantillaEnum.A4_COMPLETO,
    nombre: 'A4 Completo',
    descripcion: 'Un único afiche que ocupa la totalidad de la hoja A4',
    maxArticulos: 1,
    mostrarImagen: true,
    mostrarDatosCompletos: true,
    mostrarPlanes: true,
    requiereSeleccionPlan: false
  },
  [TipoPlantillaEnum.A4_MEDIO]: {
    tipo: TipoPlantillaEnum.A4_MEDIO,
    nombre: 'A4 1/2',
    descripcion: 'Dos afiches dispuestos en la hoja A4',
    maxArticulos: 2,
    mostrarImagen: true,
    mostrarDatosCompletos: false,
    mostrarPlanes: true,
    maxPlanes: 4,
    requiereSeleccionPlan: false
  },
  [TipoPlantillaEnum.A4_CUARTO]: {
    tipo: TipoPlantillaEnum.A4_CUARTO,
    nombre: 'A4 1/4',
    descripcion: 'Cuatro afiches que dividen la hoja A4 en 4 secciones',
    maxArticulos: 4,
    mostrarImagen: false,
    mostrarDatosCompletos: false,
    mostrarPlanes: true,
    maxPlanes: 1,
    requiereSeleccionPlan: true
  },
  [TipoPlantillaEnum.ETIQUETA_AUTOADHESIVA]: {
    tipo: TipoPlantillaEnum.ETIQUETA_AUTOADHESIVA,
    nombre: 'Etiqueta Autoadhesiva',
    descripcion: 'Etiquetas con código QR para productos',
    maxArticulos: 0, // Por definir
    mostrarImagen: false,
    mostrarDatosCompletos: false,
    mostrarPlanes: false,
    requiereSeleccionPlan: false
  }
} as const;