import { TipoPlantillaEnum } from './TipoPlantilla.types';
import { ArticuloImpresion, ArticuloConPlanSeleccionado } from './Articulo.types';

/**
 * Marco decorativo opcional para la impresión
 */
export interface Marco {
  id: string;
  nombre: string;
  imagen_url: string;
  thumbnail_url: string;
}

/**
 * Configuración base para generar una impresión
 */
export interface ConfiguracionImpresionBase {
  tipo_plantilla: TipoPlantillaEnum;
  marco_id?: string; // Opcional
}

/**
 * Configuración para plantilla A4 Completo (1 artículo)
 */
export interface ConfiguracionA4Completo extends ConfiguracionImpresionBase {
  tipo_plantilla: TipoPlantillaEnum.A4_COMPLETO;
  articulo: ArticuloImpresion;
}

/**
 * Configuración para plantilla A4 1/2 (1-2 artículos)
 */
export interface ConfiguracionA4Medio extends ConfiguracionImpresionBase {
  tipo_plantilla: TipoPlantillaEnum.A4_MEDIO;
  articulos: ArticuloImpresion[]; // Máximo 2
}

/**
 * Configuración para plantilla A4 1/4 (1-4 artículos con plan obligatorio)
 */
export interface ConfiguracionA4Cuarto extends ConfiguracionImpresionBase {
  tipo_plantilla: TipoPlantillaEnum.A4_CUARTO;
  articulos: ArticuloConPlanSeleccionado[]; // Máximo 4, cada uno con plan
}

/**
 * Configuración para etiquetas autoadhesivas
 */
export interface ConfiguracionEtiquetaAutoadhesiva extends ConfiguracionImpresionBase {
  tipo_plantilla: TipoPlantillaEnum.ETIQUETA_AUTOADHESIVA;
  articulos: ArticuloImpresion[]; // Cantidad por definir
}

/**
 * Tipo unión de todas las configuraciones posibles
 */
export type ConfiguracionImpresion =
  | ConfiguracionA4Completo
  | ConfiguracionA4Medio
  | ConfiguracionA4Cuarto
  | ConfiguracionEtiquetaAutoadhesiva;

/**
 * Request para agregar artículo a la configuración
 */
export interface AgregarArticuloRequest {
  codigo_articulo: string;
  plan_destacado_id?: number; // Obligatorio solo para A4 1/4
}

/**
 * Response de validación de artículo
 */
export interface ValidarArticuloResponse {
  valido: boolean;
  errores: string[];
  articulo?: ArticuloImpresion;
}

/**
 * Request para generar PDF
 */
export interface GenerarPDFRequest {
  configuracion: ConfiguracionImpresion;
}

/**
 * Response de generación de PDF
 */
export interface GenerarPDFResponse {
  success: boolean;
  url_descarga?: string;
  nombre_archivo?: string;
  error?: string;
}