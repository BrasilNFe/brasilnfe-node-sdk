/**
 * Payload de CancelarAssinatura: cancela as assinaturas em andamento da
 * empresa que contêm os serviços informados e os desativa.
 */
export interface CancelarAssinaturaEnvio {
/**
 * OBRIGATÓRIO. Serviços a cancelar, pelo nome do serviço.
 * Valores possíveis: "NF-e/NFC-e", "NFS-e", "CT-e", "MDF-e", "DC-e",
 * "SPED", "SINTEGRA", "FCI", "Sincronizar Docs".
 * A comparação ignora maiúsculas/minúsculas; nome inválido retorna erro
 * informando os serviços disponíveis.
 */
    Servicos?: string[];
}
