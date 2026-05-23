import { Erros } from '../Outros/Erros';

/**
 * Numeração de documento fiscal de uma empresa.
 * Usado como input em AtualizarNumeracao (upsert por TipoAmbiente + ModeloDocumento + Serie)
 * e como item de lista em ConsultarNumeracao.
 */
export interface Numeracao {
/**
 * Tipo de ambiente.
 * 1 - Produção
 * 2 - Homologação
 */
    TipoAmbiente?: number;
/**
 * Código do modelo do documento.
 * 55 - NF-e, 65 - NFC-e, 57 - CT-e, 58 - MDF-e, 10 - NFS-e, 6 - NF3-e, 21/22 - SCAN
 */
    ModeloDocumento?: number;
/**
 * Série da numeração.
 */
    Serie?: string;
/**
 * Próximo número que será usado na emissão dessa série.
 * ATENÇÃO: setar um valor MENOR que o atual pode causar rejeição da SEFAZ
 * por número duplicado. A API aceita e registra a alteração, mas a
 * responsabilidade fiscal é do integrador.
 */
    Numero?: number;
/**
 * Indica se essa é a numeração padrão do modelo+ambiente.
 * Quando uma emissão é enviada sem informar a Serie, o sistema usa a
 * numeração marcada como padrão para o modelo+ambiente. Cada combinação
 * modelo+ambiente deve ter no máximo uma série padrão.
 */
    Padrao?: boolean;
}

/**
 * Retorno de ConsultarNumeracao.
 */
export interface ConsultarNumeracaoRetorno extends Erros {
    status?: boolean;
    Numeracoes?: Numeracao[];
}

/**
 * Retorno de AtualizarNumeracao.
 */
export interface AtualizarNumeracaoRetorno extends Erros {
    status?: boolean;
    Numeracao?: Numeracao;
}
