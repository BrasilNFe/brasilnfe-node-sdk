import { Erros } from '../Outros/Erros';

export interface FciEnvio {
/**
 * Produtos para gerar os registros do arquivo FCI
 */
    Produtos?: FciProduto[];
/**
 * Quando verdadeiro retorna erro caso envie produtos com código repetido
 */
    ValidarCodigos?: boolean;
/**
 * Quando verdadeiro, além de gerar o arquivo, assina e transmite a mídia via programa TED.
 * Requer certificado e-CNPJ configurado na empresa.
 */
    Transmitir?: boolean;
}

export interface FciProduto {
/**
 * Código interno que identifica a mercadoria no estabelecimento
 */
    Codigo?: string;
/**
 * Descrição da Mercadoria
 */
    Descricao?: string;
/**
 * Código baseado na tabela da Nomenclatura Comum do MERCOSUL
 */
    Ncm?: string;
/**
 * Código Global Trade Item Number, se houver
 */
    Gtin?: string;
/**
 * Unidade a que se refere o valor de saída da mercadoria
 */
    UnidadeMedida?: string;
/**
 * Valor de saída (comercialização) da mercadoria
 */
    ValorSaida?: number;
/**
 * Valor da parcela importada do exterior (Obrigatório caso não for informado o Percentual Importado)
 */
    ValorImportado?: number;
/**
 * Percentual do conteúdo de importação informado pelo contribuinte (Obrigatório caso não for informado o Valor Importado)
 */
    PercentualImportado?: number;
}

export interface FciRetorno extends Erros {
    Status?: boolean;
    Registros?: string;
/**
 * Indica se a mídia foi efetivamente enviada ao TED (somente quando Transmitir = true).
 */
    Transmitido?: boolean;
/**
 * Número do protocolo de recepção retornado pelo TED, quando disponível.
 */
    NumeroProtocolo?: string;
/**
 * Data da transmissão lida da mídia (dd/MM/yyyy), quando disponível.
 */
    DataTransmissao?: string;
}

