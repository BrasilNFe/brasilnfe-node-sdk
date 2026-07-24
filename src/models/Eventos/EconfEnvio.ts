/**
 * Evento de Conciliação Financeira - ECONF (NT 2024.002 / 2025.002).
 * Vincula as transações financeiras (recebimentos) ao documento fiscal já autorizado.
 * Aplica-se a NF-e (modelo 55) e NFC-e (modelo 65).
 */
export interface EconfEnvio {
/**
 * Chave de acesso de 44 dígitos da NF-e/NFC-e autorizada.
 */
    Chave?: string;
/**
 * Ambiente do documento original (DEVE bater com o ambiente onde a nota foi emitida).
 * 1 - Produção
 * 2 - Homologação
 */
    TipoAmbiente?: number;
/**
 * Número sequencial do evento (1 a 20). Se omitido, o sistema usa o próximo disponível.
 */
    NumeroSequencial?: number;
/**
 * Data/hora do evento. Se não informado, usa a data/hora atual.
 */
    DataEvento?: string;
/**
 * Lista de pagamentos a conciliar (1 a 100). Obrigatório no envio do ECONF (110750).
 */
    Pagamentos?: PagamentoEconf[];
/**
 * Quando true, envia o CANCELAMENTO do ECONF (tpEvento 110751) em vez do registro.
 * Exige NumeroProtocoloEconf preenchido.
 */
    Cancelar?: boolean;
/**
 * Número do protocolo de autorização do ECONF original a cancelar (obrigatório quando Cancelar = true).
 */
    NumeroProtocoloEconf?: string;
}

export interface PagamentoEconf {
/**
 * Indicador da forma de pagamento: 0 = à vista; 1 = a prazo. Opcional.
 */
    IndicadorPagamento?: number;
/**
 * Forma de pagamento (01=Dinheiro, 03=Cartão de Crédito, 04=Cartão de Débito, 17=PIX, 99=Outros, ...).
 */
    FormaPagamento?: string;
/**
 * Descrição do pagamento. Obrigatório quando FormaPagamento = 99 (Outros).
 */
    DescricaoPagamento?: string;
/**
 * Valor do pagamento.
 */
    Valor?: number;
/**
 * Data do pagamento/liquidação. Obrigatória
 */
    DataPagamento?: string;
/**
 * CNPJ do estabelecimento onde o pagamento foi processado (transacional). Opcional.
 */
    CnpjPagamento?: string;
/**
 * UF do CNPJ onde o pagamento foi processado. Opcional.
 */
    UfPagamento?: string;
/**
 * CNPJ do estabelecimento beneficiário (recebedor) do pagamento. Opcional.
 */
    CnpjRecebedor?: string;
/**
 * UF do estabelecimento beneficiário (recebedor). Opcional.
 */
    UfRecebedor?: string;
/**
 * CNPJ da instituição financeira/credenciadora (adquirente). Opcional.
 */
    CnpjInstituicaoFinanceira?: string;
/**
 * Bandeira do cartão (01=Visa, 02=Mastercard, 03=Amex, 06=Elo, 07=Hipercard, 99=Outros, ...). Opcional.
 */
    BandeiraCartao?: string;
/**
 * Número de autorização da transação (cartão/PIX). Opcional.
 */
    CodAutorizacao?: string;
}
