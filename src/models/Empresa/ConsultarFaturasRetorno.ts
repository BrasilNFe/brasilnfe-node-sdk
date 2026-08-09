import { NewError } from '../Outros/Erros';

/**
 * Fatura de assinatura da empresa.
 */
export interface FaturaInfo {
/**
 * Id da fatura (o mesmo FaturaId retornado por AtivarAssinatura).
 */
    Id?: number;
/**
 * Situação da fatura.
 * "PENDING" — aguardando pagamento; "PAID" — paga;
 * "EXPIRED" — vencida; "CANCELED" — cancelada.
 */
    Status?: string;
/**
 * Descrição amigável da situação (ex.: "Aguardando pagamento").
 */
    Situacao?: string;
/**
 * Valor total da fatura.
 */
    Valor?: number;
/**
 * Data de vencimento.
 */
    DtVencimento?: string;
/**
 * Data do pagamento, quando paga.
 */
    DtPagamento?: string;
/**
 * Forma de pagamento. Valores possíveis: "PIX", "BOLETO_PIX" e "CREDIT_CARD".
 */
    FormaPagamento?: string;
/**
 * Serviços cobrados na fatura (textos).
 */
    Servicos?: string[];
}

/**
 * Resultado da consulta de faturas de assinatura da empresa.
 */
export interface ConsultarFaturasRetorno extends NewError {
/**
 * Faturas da empresa, da mais recente para a mais antiga.
 */
    Faturas?: FaturaInfo[];
}
