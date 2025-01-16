export interface ICategoria {
    aik_re1_codigo: string
    aik_re1_descri: string
}
export interface IRubro {
    aik_re2_codigo: string
    aik_re2_descri: string
}
export interface IFamilia {
    aik_fa_codigo: string
    aik_fa_nombre: string
    aik_fa_nivel: string
    aik_fa_palm: string
}
export type IFamiliaData = IFamilia

export interface ICategoriaRubro {
    catrub_id: number
    aik_re1_codigo: string
    aik_re2_codigo: string
}
export interface IRubroFamilia {
    rubfa_id: number
    aik_fa_codigo: string
    aik_re2_codigo: string
}



export interface ICategoriaRubroIncludingRubro extends ICategoriaRubro {
    aikon_referencia02: IRubro
}

export interface ICategoriaIncludingCategoriaRubro extends ICategoria {
    categoria_rubro: ICategoriaRubroIncludingRubro[]
}

export interface IRubroFamiliaIncludingFamilia extends IRubroFamilia {
    aikon_familia: IFamilia
}

export interface IRubroIncludingRubroFamilia extends IRubro {
    rubro_familia: IRubroFamiliaIncludingFamilia[]
}
