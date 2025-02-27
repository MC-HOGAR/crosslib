import Decimal from "decimal.js";
import { IArticuloAikonData } from '../types/ArticuloAikon.types'

import { ArticuloPrecio } from './ArticuloPrecio'
import { NullArticuloPrecio } from './NullArticuloPrecio'
import { IArticuloPrecioData } from '../types/ArticuloPrecio.types'

import { ArticuloWeb } from './ArticuloWeb'
import { NullArticuloWeb } from './NullArticuloWeb'
import { IArticuloWebData } from '../types/ArticuloWeb.types'

import { Familia } from './../../Jerarquias/domain/Familia'
import { NullFamilia } from './../../Jerarquias/domain/NullFamilia'
import { IFamiliaData } from './../../Jerarquias/types/Jerarquias.types'

import { Marca } from './../../Marcas/domain/Marca'
import { NullMarca } from './../../Marcas/domain/NullMarca'
import { IMarcaData } from './../../Marcas/types/Marcas.types'

interface ConstructorOptions {
  precioData?: IArticuloPrecioData
  webData?: IArticuloWebData,
  familia?: IFamiliaData,
  marca?: IMarcaData
}

// Clase que representa el artículo general del ERP, datos sin modificaciones
export class ArticuloAikon {
  aik_ar_codigo: string;
  aik_ar_cosnet: Decimal; // Costo neto, valor monetario como string convertido a Decimal
  aik_ap_utilidad: Decimal; // Utilidad (markup aikon) como porcentaje
  aik_ap_impuesto_interno: Decimal; // Impuesto Interno (%)
  aik_iva_porcen: Decimal; // IVA (%)
  aik_stock_total: number; // Stock total disponible
  aik_ap_precio_iva: Decimal; // Precio con IVA calculado por otro sistema Aikon erp.
  aik_ar_publicarweb: string;
  aik_ar_descri: string;
  aik_ar_memo: string;
  aik_ar_alto: number;
  aik_ar_ancho: number;
  aik_ar_profundo: number;
  aik_ar_color: string;
  aik_ar_peso: number;
  aik_ar_descria: string;
  aik_ar_mesesgarantia: number;
  aik_esa_codigo: string;
  aik_ar_fechamodif: string | null; // StringDate | null.
  aik_ar_fecha_alta: string | null; // StringDate | null.
  aik_fa_codigo: string;
  aik_ma_codigo: string;
  aik_re1_codigo: string;
  aik_re2_codigo: string;
  fecha_eliminado_aikon: string | null
  fecha_inicializado: string | null
  costo_subtotal: Decimal

  articulo_precio: ArticuloPrecio;
  articulo_web: ArticuloWeb;
  aikon_familia: Familia
  aikon_marca: Marca

  constructor(data: IArticuloAikonData, opt: ConstructorOptions = {}) {
    this.aik_ar_codigo = data.aik_ar_codigo;
    this.aik_ar_cosnet = new Decimal(data.aik_ar_cosnet);
    this.aik_ap_utilidad = new Decimal(data.aik_ap_utilidad);
    this.aik_ap_impuesto_interno = new Decimal(data.aik_ap_impuesto_interno);
    this.aik_iva_porcen = new Decimal(data.aik_iva_porcen);
    this.aik_stock_total = data.aik_stock_total;
    this.aik_ap_precio_iva = new Decimal(data.aik_ap_precio_iva);
    this.aik_ar_publicarweb = data.aik_ar_publicarweb;
    this.aik_ar_descri = data.aik_ar_descri;
    this.aik_ar_memo = data.aik_ar_memo;
    this.aik_ar_alto = data.aik_ar_alto;
    this.aik_ar_ancho = data.aik_ar_ancho;
    this.aik_ar_profundo = data.aik_ar_profundo;
    this.aik_ar_color = data.aik_ar_color;
    this.aik_ar_peso = data.aik_ar_peso;
    this.aik_ar_descria = data.aik_ar_descria;
    this.aik_ar_mesesgarantia = data.aik_ar_mesesgarantia;
    this.aik_esa_codigo = data.aik_esa_codigo;
    this.aik_ar_fechamodif = data.aik_ar_fechamodif;
    this.aik_ar_fecha_alta = data.aik_ar_fecha_alta;
    this.aik_fa_codigo = data.aik_fa_codigo;
    this.aik_ma_codigo = data.aik_ma_codigo;
    this.aik_re1_codigo = data.aik_re1_codigo;
    this.aik_re2_codigo = data.aik_re2_codigo;
    this.fecha_eliminado_aikon = data.fecha_eliminado_aikon
    this.fecha_inicializado = data.fecha_inicializado
    this.costo_subtotal = new Decimal(data.costo_subtotal)

    // Inicializar entidades de las options con Null si nos no la proveen.
    this.articulo_precio = opt.precioData ? new ArticuloPrecio(opt.precioData) : NullArticuloPrecio.getInstance()
    this.articulo_web = opt.webData ? new ArticuloWeb(opt.webData) : NullArticuloWeb.getInstance()
    this.aikon_familia = opt.familia ? new Familia(opt.familia) : NullFamilia.getInstance()
    this.aikon_marca = opt.marca ? new Marca(opt.marca) : NullMarca.getInstance()

  }
}