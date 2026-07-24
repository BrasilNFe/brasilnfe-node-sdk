import { Erros, NewError } from '../Outros/Erros';

export interface NotaFiscalRetorno extends Erros {
    ReturnNF?: RetornoInfo;
    Base64Xml?: string;
    Base64File?: string;
}

export interface RetornoInfo {
    Numero?: number;
    Serie?: number;
    ChaveNF?: string;
    NumeroProtocolo?: string;
    CodTipoAmbiente?: number;
    DsTipoAmbiente?: string;
    CodStatusRespostaSefaz?: number;
    DsStatusRespostaSefaz?: string;
    Ok?: boolean;
    Detalhes?: DetalhesNF;
}

export interface DetalhesNF {
    valorNf?: number;
    valorIcms?: number;
    valorIpi?: number;
    valorPis?: number;
    valorCofins?: number;
}

export interface NotaFiscalLoteListRetorno {
    ReturnNF?: RetornoInfo;
    Base64Xml?: string;
    Base64File?: string;
    IdentificadorInterno?: string;
}

/**
 * Payload de consulta de status de um lote de NF-e/NFC-e (/ConsultarLoteNFe).
 */
export interface ConsultarLoteNFeEnvio {
/**
 * Código do lote retornado por /EnviarNotaFiscalLote.
 */
    CodLote?: string;
}

export interface NotaFiscalLoteRetorno extends NewError {
/**
 * Código do lote no Brasil NFe (use em /ConsultarLoteNFe).
 */
    CodLote?: string;
/**
 * Status do lote.
 * 1 - Aguardando salvar
 * 2 - Aguardando transmissão SEFAZ
 * 3 - Aguardando finalização
 * 4 - Lote finalizado
 * 5 - Lote finalizado com erro
 */
    StatusLote?: number;
/**
 * Descrição do status do lote.
 */
    DsStatusLote?: string;
/**
 * Quantidade total de notas no lote.
 */
    QtdTotal?: number;
/**
 * Quantidade de notas autorizadas pela SEFAZ.
 */
    QtdEmitida?: number;
/**
 * Quantidade de notas que falharam.
 */
    QtdErro?: number;
    Notas?: NotaFiscalLoteListRetorno[];
}

