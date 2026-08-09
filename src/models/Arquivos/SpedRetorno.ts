import { Erros } from '../Outros/Erros';

export interface SpedRetorno extends Erros {
    Status?: number;
    Codigo?: string;
    Registros?: string;
    Url?: string;
    Detalhamento?: Detalhamento;
}

export interface Detalhamento {
    SaldoCredorTransportarIcmsIpi?: number;
/**
 * Saldo credor de IPI a transportar para o período seguinte (E520/VL_SC_IPI).
 */
    SaldoCredorTransportarIpi?: number;
/**
 * Saldo de créditos de PIS a transportar para o período seguinte (M100/SLD_CRED). EFD Contribuições.
 */
    SaldoCredorTransportarPis?: number;
/**
 * Saldo de créditos de COFINS a transportar para o período seguinte (M500/SLD_CRED). EFD Contribuições.
 */
    SaldoCredorTransportarCofins?: number;
    DFes?: DetalhamentoDFe[];
}

export interface InfoAjuste {
    CodigoAjuste?: string;
    CodigoProduto?: string;
    Icms?: number;
    BcIcms?: number;
    Outros?: number;
}

export interface DetalhamentoDFe {
    TipoMovimentacao?: number;
    CpfCnpj?: string;
    Chave?: string;
    CfopCte?: number;
    DataMovimentacao?: string;
    Itens?: DetalhamentoDFeItem[];
    InfoAjustes?: InfoAjuste[];
}

export interface DetalhamentoDFeItem {
    NumeroItem?: number;
    CodigoProduto?: string;
    Cfop?: number;
    Ncm?: string;
    CstIcmsCsosn?: string;
    CstPis?: string;
    CstCofins?: string;
    CstIpi?: string;
    Quantidade?: number;
    ValorUnitario?: number;
    ValorTotal?: number;
    Desconto?: number;
    Outros?: number;
    Frete?: number;
    Icms?: number;
    AliquotaIcms?: number;
    Pis?: number;
    Cofins?: number;
    Ipi?: number;
}

