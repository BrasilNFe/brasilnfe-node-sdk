/**
 * Dados do responsável financeiro (pagador) da assinatura.
 */
export interface RepresentanteEnvio {
/**
 * OBRIGATÓRIO. Nome ou razão social do responsável financeiro.
 */
    Nome?: string;
/**
 * OBRIGATÓRIO. E-mail do responsável financeiro (recebe as faturas).
 */
    Email?: string;
/**
 * OBRIGATÓRIO. CPF ou CNPJ do responsável financeiro, com ou sem máscara.
 * Validado (dígitos verificadores).
 */
    CpfCnpj?: string;
/**
 * OBRIGATÓRIO. Telefone do responsável financeiro, com DDD (mínimo 10 dígitos).
 */
    Telefone?: string;
/**
 * OBRIGATÓRIO. CEP do endereço do responsável financeiro (8 dígitos).
 */
    Cep?: string;
/**
 * OBRIGATÓRIO. Logradouro do endereço.
 */
    Logradouro?: string;
/**
 * OBRIGATÓRIO. Número do endereço.
 */
    Numero?: string;
/**
 * Complemento do endereço (opcional).
 */
    Complemento?: string;
/**
 * OBRIGATÓRIO. Bairro do endereço.
 */
    Bairro?: string;
/**
 * OBRIGATÓRIO. Município do endereço.
 */
    Municipio?: string;
/**
 * OBRIGATÓRIO. UF do endereço (sigla do estado, ex.: "MG").
 * Validada contra a lista de estados.
 */
    Uf?: string;
}

/**
 * Payload de AtivarAssinatura: ativa a assinatura da empresa diretamente,
 * sem passar pelo checkout web, criando a cobrança na hora.
 */
export interface AtivarAssinaturaEnvio {
/**
 * OBRIGATÓRIO. Serviços a ativar na empresa, pelo nome do serviço.
 * Valores possíveis: "NF-e/NFC-e", "NFS-e", "CT-e", "MDF-e", "DC-e",
 * "SPED", "SINTEGRA", "FCI", "Sincronizar Docs".
 * A comparação ignora maiúsculas/minúsculas. Nome inválido retorna erro
 * informando os serviços disponíveis (envie vazio para receber a lista
 * atualizada na mensagem de erro).
 */
    Servicos?: string[];
/**
 * Forma de pagamento da assinatura.
 * "BOLETO_PIX" (padrão), "CREDIT_CARD" ou "PIX".
 */
    FormaPagamento?: string;
/**
 * OPCIONAL. Responsável financeiro diferente da empresa (quem paga as faturas).
 * Quando informado, a cobrança (PIX/boleto) é emitida em nome dele e as
 * faturas ficam vinculadas a ele; a empresa continua sendo a beneficiária
 * dos serviços. Omitido, a própria empresa é a pagadora.
 */
    Representante?: RepresentanteEnvio;
}
