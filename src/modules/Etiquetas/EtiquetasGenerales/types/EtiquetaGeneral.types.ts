export interface EtiquetaGeneral {
    id: number;
    nombre: string;
    nombreWeb: string;
    slug: string;
    comentarios: string | null;
    imagen_url: string | null;
    activo: boolean;
    fecha_desde_valido: string | null;
    fecha_hasta_valido: string | null;
    created_at: string;
    updated_at: string;
}

export type EtiquetaGeneralCrearDto = Pick<EtiquetaGeneral, 'nombre' | 'nombreWeb' | 'slug' | 'comentarios' | 'fecha_desde_valido' | 'fecha_hasta_valido'>

export type EtiquetaGeneralActualizarDto = Pick<EtiquetaGeneral, 'nombre' | 'nombreWeb' | 'slug' | 'comentarios' | 'activo' | 'fecha_desde_valido' | 'fecha_hasta_valido'>

//export type EtiquetaGeneralCrearActualizarFormState = EtiquetaGeneralCrearDto & EtiquetaGeneralActualizarDto