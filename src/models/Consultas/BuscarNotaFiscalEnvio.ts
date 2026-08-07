export interface BuscarNotaFiscalEnvio {
/**
 * Identificação do ambiente
 * 1 - Produção
 * 2 - Homologação
 */
    TipoAmbiente?: number;
/**
 * Tipo do documento fiscal (Padrão 0 - Entrada)
 * 0 - Entradas
 * 1 - Saídas
 */
    TipoDocumentoFiscal?: number;
/**
 * Data inicial da busca
 */
    DtInicio?: string;
/**
 * Data final da busca
 */
    DtFim?: string;
/**
 * Busca notas que possui o código interno informado (somente saídas)
 */
    IdentificadorInterno?: string;
}

