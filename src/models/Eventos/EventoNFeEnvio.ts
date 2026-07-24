/**
 * Eventos da Reforma Tributária do Consumo (NT 2025.002) para NF-e (modelo 55) e NFC-e (modelo 65).
 * Endpoint genérico: o campo TipoEvento decide qual evento é enviado e quais campos deste objeto são usados.
 */
export interface EventoNFeEnvio {
/**
 * Ambiente do documento original (DEVE bater com o ambiente onde a nota foi emitida).
 * 1 - Produção
 * 2 - Homologação
 */
    TipoAmbiente?: number;
/**
 * Chave de acesso de 44 dígitos da NF-e/NFC-e autorizada.
 */
    Chave?: string;
/**
 * Código do evento da Reforma Tributária a enviar:
 * 112110 - Informação de efetivo pagamento integral para liberar crédito presumido do adquirente (usa IndicadorQuitacao).
 * 112120 - Importação em ALC/ZFM não convertida em isenção (usa Itens: ValorIBS, ValorCBS, Quantidade, Unidade).
 * 112130 - Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor (usa Itens: ValorIBS, ValorCBS, Quantidade, Unidade, EstornoCreditoIBS, EstornoCreditoCBS).
 * 112140 - Fornecimento não realizado com pagamento antecipado (usa Itens: ValorIBS, ValorCBS, Quantidade, Unidade).
 * 112150 - Atualização da Data de Previsão de Entrega (usa DataPrevisaoEntrega).
 * 211110 - Solicitação de Apropriação de crédito presumido (usa Itens: ValorBaseCalculo e os grupos de crédito presumido IBS/CBS).
 * 211124 - Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente (usa Itens: ValorIBS, ValorCBS, Quantidade, Unidade).
 * 211128 - Aceite de débito na apuração por emissão de nota de crédito (usa IndicadorAceitacao).
 * 211130 - Imobilização de Item (usa Itens: ValorIBS, ValorCBS, Quantidade, Unidade).
 * 211140 - Solicitação de Apropriação de Crédito de Combustível (usa Itens: ValorIBS, ValorCBS, Quantidade, Unidade).
 * 211150 - Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente (usa Itens: ValorCreditoIBS, ValorCreditoCBS).
 * 212110 - Manifestação sobre Pedido de Transferência de Crédito de IBS em Operação de Sucessão (usa IndicadorAceitacao).
 * 212120 - Manifestação sobre Pedido de Transferência de Crédito de CBS em Operação de Sucessão (usa IndicadorAceitacao).
 * 110001 - Cancelamento de Evento (usa TipoEventoCancelado e ProtocoloEvento).
 */
    TipoEvento?: number;
/**
 * Número sequencial do evento (1 a 20). Se omitido, o sistema usa o próximo disponível para este tipo.
 */
    NumeroSequencial?: number;
/**
 * Data/hora do evento. Se não informado, usa a data/hora atual.
 */
    DataEvento?: string;
/**
 * Indicador de quitação (valor 1). Usado no evento 112110.
 */
    IndicadorQuitacao?: number;
/**
 * Indicador de aceite (0 = não aceite; 1 = aceite). Usado nos eventos 211128, 212110 e 212120.
 */
    IndicadorAceitacao?: number;
/**
 * Nova data de previsão de entrega. Usada no evento 112150.
 */
    DataPrevisaoEntrega?: string;
/**
 * Código do tipo do evento que está sendo cancelado. Obrigatório no evento 110001.
 */
    TipoEventoCancelado?: number;
/**
 * Protocolo de autorização do evento original a cancelar. Obrigatório no evento 110001.
 */
    ProtocoloEvento?: string;
/**
 * Itens afetados pelo evento. Obrigatório nos eventos com grupo de itens
 * (112120, 112130, 112140, 211110, 211124, 211130, 211140, 211150).
 */
    Itens?: ItemEvento[];
}

/**
 * Item de um evento de NF-e. Cada evento usa apenas o subconjunto de campos pertinente.
 */
export interface ItemEvento {
/**
 * Número do item na NF-e referenciada (nItem). Obrigatório em todos os eventos com itens.
 */
    NumeroItem?: number;
/**
 * Valor de IBS. Usado em 112120, 112130, 112140, 211124, 211130, 211140.
 */
    ValorIBS?: number;
/**
 * Valor de CBS. Usado em 112120, 112130, 112140, 211124, 211130, 211140.
 */
    ValorCBS?: number;
/**
 * Quantidade afetada. Usado em 112120, 112130, 112140, 211124, 211130, 211140.
 */
    Quantidade?: number;
/**
 * Unidade de medida. Usado em 112120, 112130, 112140, 211124, 211130, 211140.
 */
    Unidade?: string;
/**
 * Valor do crédito de IBS a estornar. Usado apenas no 112130 (transporte do fornecedor).
 */
    EstornoCreditoIBS?: number;
/**
 * Valor do crédito de CBS a estornar. Usado apenas no 112130 (transporte do fornecedor).
 */
    EstornoCreditoCBS?: number;
/**
 * Base de cálculo do item. Usado no 211110 (crédito presumido).
 */
    ValorBaseCalculo?: number;
/**
 * Código de classificação do crédito presumido de IBS (2 dígitos). Usado no 211110.
 */
    CodCredPresIBS?: string;
/**
 * Percentual do crédito presumido de IBS. Usado no 211110.
 */
    PercCredPresIBS?: number;
/**
 * Valor do crédito presumido de IBS. Usado no 211110.
 */
    ValorCredPresIBS?: number;
/**
 * Código de classificação do crédito presumido de CBS (2 dígitos). Usado no 211110.
 */
    CodCredPresCBS?: string;
/**
 * Percentual do crédito presumido de CBS. Usado no 211110.
 */
    PercCredPresCBS?: number;
/**
 * Valor do crédito presumido de CBS. Usado no 211110.
 */
    ValorCredPresCBS?: number;
/**
 * Valor do crédito de IBS a apropriar. Usado no 211150.
 */
    ValorCreditoIBS?: number;
/**
 * Valor do crédito de CBS a apropriar. Usado no 211150.
 */
    ValorCreditoCBS?: number;
}
