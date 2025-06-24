export interface BloqueListado {
    id: number;
    titulo: string;
    descripcion: string;
    tituloVisible: boolean;
    linkVerMasUrl: string;
    orden: number;
    activo: boolean;
    fechaCreacion: string;
    fechaActualizacion: string;
}

export interface ItemBloqueListado {
    id: number;
    bloqueId: number;
    articuloId: string;
    orden: number;
}