/**
 * Estado de un indicador de salud individual
 */
export type HealthStatus = 'up' | 'down';

/**
 * Estado general del health check
 */
export type HealthCheckStatus = 'ok' | 'error' | 'shutting_down';

/**
 * Detalles de un indicador de salud
 */
export interface HealthIndicatorDetails {
    status: HealthStatus;
    message?: string;
    [key: string]: any; // Para datos adicionales específicos
}

/**
 * Mapa de indicadores cuando todo está OK
 */
export interface HealthCheckInfo {
  database?: HealthIndicatorDetails;
  aws_s3?: HealthIndicatorDetails;
  aws_cognito_panel_interno?: HealthIndicatorDetails;
  aws_cognito_panel_vendedor?: HealthIndicatorDetails;
  algolia?: HealthIndicatorDetails;
  firestore?: HealthIndicatorDetails;
  erp_api?: HealthIndicatorDetails;
  [key: string]: HealthIndicatorDetails | undefined;
}

/**
 * Mapa de indicadores cuando hay errores
 */
export interface HealthCheckError {
  database?: HealthIndicatorDetails;
  aws_s3?: HealthIndicatorDetails;
  aws_cognito_panel_interno?: HealthIndicatorDetails;
  aws_cognito_panel_vendedor?: HealthIndicatorDetails;
  algolia?: HealthIndicatorDetails;
  firestore?: HealthIndicatorDetails;
  erp_api?: HealthIndicatorDetails;
  [key: string]: HealthIndicatorDetails | undefined;
}

/**
 * Detalles adicionales del health check
 */
export interface HealthCheckDetails {
  [key: string]: HealthIndicatorDetails;
}

/**
 * Respuesta completa del endpoint /health
 */
export interface HealthCheckResponse {
  status: HealthCheckStatus;
  info?: HealthCheckInfo;
  error?: HealthCheckError;
  details?: HealthCheckDetails;
}