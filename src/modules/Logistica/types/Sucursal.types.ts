/**
 * Tipos para la gestión de sucursales
 */
export interface ISucursal {
  id: number;
  nombre: string;
  email: string;
  ciudad_id: number;
  direccion_texto: string | null;
  telefono: string | null;
  activa: boolean;
  retiro_habilitado: boolean;
  created_at: string;
  updated_at: string;
}