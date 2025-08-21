export interface NroComercio {
    id: number;
    comentarios: string | null;
    servicio_pago_id: number;
    nro_comercio: string;
    banco_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface SelectEntidad {
    id: number;
    nombre: string;
    nombreWeb: string;
    orden: number | null;
}