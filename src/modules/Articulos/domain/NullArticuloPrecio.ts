import { ArticuloPrecio } from './ArticuloPrecio'
import { IArticuloPrecioData } from '../types/ArticuloPrecio.types'

const nullArticuloPrecioData: IArticuloPrecioData = {
    aik_ar_codigo: '-1',
    arp_utilidad_web: '0',
    arp_porcentaje_off: '0',
    arp_precio_web: '0'
}

// Clase que representa un objeto nulo de ArticuloPrecio. NullObjectPattern & Singleton. 
export class NullArticuloPrecio extends ArticuloPrecio {

    // Instancia singleton privada
    private static instance: NullArticuloPrecio;

    private constructor() {
      super(nullArticuloPrecioData);
    }

    // Método estático para obtener la única instancia de la clase
    public static getInstance(): NullArticuloPrecio {
        if (!NullArticuloPrecio.instance) {
            NullArticuloPrecio.instance = new NullArticuloPrecio();
        }
        return NullArticuloPrecio.instance;
  }
}