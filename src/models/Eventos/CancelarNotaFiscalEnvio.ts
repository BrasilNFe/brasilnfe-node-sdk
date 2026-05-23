export interface CancelarNotaFiscalEnvio {
/**
 * Chave de acesso de 44 dígitos da NF-e/NFC-e/CT-e/MDF-e/DC-e a cancelar.
 * Obrigatório quando TipoDocumento = 0. Para NFS-e (TipoDocumento = 1) use NumeroNFSe.
 */
    ChaveNF?: string;
/**
 * Número do protocolo de autorização original do documento (obrigatório quando a nota foi
 * emitida por outro sistema externo). Se o documento foi emitido pelo próprio BrasilNFe,
 * o protocolo é localizado automaticamente.
 */
    NumeroProtocolo?: string;
/**
 * Motivo do cancelamento. MÍNIMO 15 caracteres, MÁXIMO 1000.
 * NÃO use texto genérico - descreva o motivo real.
 * Obrigatório para TipoDocumento = 0 (NFe-family).
 */
    Justificativa?: string;
/**
 * Ambiente do documento original (DEVE bater com o ambiente onde a nota foi emitida).
 * 1 - Produção
 * 2 - Homologação
 * IMPORTANTE: passe explicitamente. Se a nota foi emitida em homologação, use 2.
 */
    TipoAmbiente?: number;
/**
 * Data do evento de cancelamento do documento (Caso não for enviado é considerada a data e hora atual)
 */
    DataEvento?: string;
/**
 * Número da NFS-e a ser cancelada
 */
    NumeroNFSe?: string;
/**
 * Código do motivo de cancelamento da NFS-e (Padrão 1)
 * 1 - Erro na emissão
 * 2 - Serviço não prestado
 * 3 - Duplicidade da nota
 * 9 - Outros
 */
    CodCancelamentoNFSe?: number;
/**
 * Tipo do documento fiscal a cancelar.
 * 0 - NF-e, NFC-e, CT-e, MDF-e, DC-e (usa ChaveNF de 44 dígitos)
 * 1 - NFS-e (usa NumeroNFSe + CodCancelamentoNFSe + TipoAmbiente)
 */
    TipoDocumento?: number;
/**
 * Número sequencial do evento
 */
    NumeroSequencial?: number;
/**
 * CPF ou CNPJ do Usuário Emitente (Remetente) da DC-e original.
 * Obrigatório no cancelamento de DC-e quando a nota não está cadastrada no sistema
 * (caso esteja, o valor é lido da própria NotaFiscal).
 */
    CpfCnpjRemetenteDCe?: string;
}

