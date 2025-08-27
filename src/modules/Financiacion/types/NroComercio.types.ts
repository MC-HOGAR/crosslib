export interface NroComercio {
    id: number;
    comentarios: string | null;
    servicio_pago_id: number;
    nro_comercio: string;
    banco_id: number;
    created_at: string;
    updated_at: string;
}

export interface SelectEntidad {
    id: number;
    nombre: string;
    nombreWeb: string;
    orden: number | null;
}