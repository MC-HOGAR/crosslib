export interface ComparacionArticuloParaVerificarDiferenciasEstado {
    aik_ar_codigo: string;
    aik_ar_descri: string;
    esa_codigo_web: string;
    esa_codigo_api_aikon: string;
    stock_total_web: number | null;
    stock_total_api_aikon: number | null;
    fecha_modificacion_web: string | null;
    fecha_modificacion_api_aikon: string | null;
    api_aikon_listado_articulo_no_habilitado: boolean;
}