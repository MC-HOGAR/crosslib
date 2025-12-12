import { PlanPago } from '@/modules/Financiacion/types/PlanPago.types';

/**
 * Información del artículo para impresión
 * Incluye toda la data necesaria del backend
 */
export interface ArticuloImpresion {
  // Datos básicos
  aik_ar_codigo: string;
  ar_titulo: string;
  ar_descripcion_web: string;
  
  // Imagen principal
  ar_img_principal: {
    full: {
      object_key: string;
    };
    placeholder: {
      object_key: string;
    };
  } | null;
  
  // Precios
  precio_web: string; // Precio destacado
  precio_aikon: string; // Precio tachado (si aplica)
  off: string; // Porcentaje de descuento
  
  // Planes destacados
  planes_destacados: PlanPago[];
  
  // QR Code
  url_detalle: string; // URL para generar QR
}

/**
 * Configuración de artículo con plan seleccionado (para A4 1/4)
 */
export interface ArticuloConPlanSeleccionado extends ArticuloImpresion {
  plan_seleccionado_id: number;
}

/**
 * Validación de artículo para impresión
 */
export interface ValidacionArticuloImpresion {
  codigo: string;
  valido: boolean;
  errores: string[];
  articulo?: ArticuloImpresion;
}