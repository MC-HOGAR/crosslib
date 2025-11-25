export interface aikon_deposito {
    telefono: string | null;
    updated_at: string;
    codigo: string;
    nombre: string;
    direccion: string | null;
    localidad: string;
    provincia_id: string;
    provincia_nombre: string;
    personal: string | null;
    personal_nombre: string | null;
    stock_predet: string;
    activo: boolean;
    sincronizado_at: string;
}

export interface aikon_zonas { 
    zo_codigo: string;
    zo_nombre: string;
}

export interface aikon_vendedores {
    ven_codigo: string;
    ven_nombre: string;
}

export interface aikon_provincias {
    po_codigo: string;
    po_descri: string;
}