export interface Provincia {
    id: number;
    idGeoref: string;
    idAikon?: string;
    nombre: string;
    nombre_normalizado: string;
    centroide_lon: number;
    centroide_lat: number;
    created_at: string;
    updated_at: string;
}

export interface Localidad {
    id: number;
    provinciaId: number;
    idGeoref: string;
    nombre: string;
    nombre_normalizado: string;
    centroide_lon: number;
    centroide_lat: number;

    created_at: string;
    updated_at: string;
}