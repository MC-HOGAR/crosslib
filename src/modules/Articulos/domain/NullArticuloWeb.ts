import { ArticuloWeb } from './ArticuloWeb';

import { IArticuloWebData } from '../types/ArticuloWeb.types'

const nullArticuloWebData: IArticuloWebData = {
    aik_ar_codigo: '-1',
    ar_img_principal: null,
    ar_descripcion_web: '',
    ar_titulo : '',
    ar_slug: '',
    ar_galeria: [],
    updated_at: null,
    ar_activo: true
}

export class NullArticuloWeb extends ArticuloWeb {

    private static instance: NullArticuloWeb;

    private constructor() {
      super(nullArticuloWebData);
    }

    public static getInstance(): NullArticuloWeb {
        if (!NullArticuloWeb.instance) {
            NullArticuloWeb.instance = new NullArticuloWeb();
        }
        return NullArticuloWeb.instance;
  }
}