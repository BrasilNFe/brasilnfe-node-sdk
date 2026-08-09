import { NewError } from '../Outros/Erros';

/**
 * Resultado da ativação direta de assinatura (sem checkout web).
 * A assinatura é criada aguardando pagamento e os serviços ativam
 * automaticamente quando o pagamento é confirmado.
 */
export interface AtivarAssinaturaRetorno extends NewError {
/**
 * Mensagem informativa da operação.
 */
    Mensagem?: string;
/**
 * true quando já existia cobrança pendente idêntica e ela foi reaproveitada
 * (chamadas repetidas não geram duplicidade).
 */
    Reaproveitada?: boolean;
/**
 * true quando a assinatura foi ativada sem cobrança imediata (o valor é
 * consolidado na próxima fatura recorrente).
 */
    SemCobrancaImediata?: boolean;
/**
 * Serviços incluídos na assinatura (textos). Nulo quando o plano completo
 * foi contratado.
 */
    Servicos?: string[];
/**
 * Valor da cobrança gerada.
 */
    Valor?: number;
/**
 * Id da fatura, utilizável nos endpoints de faturas/boleto.
 */
    FaturaId?: number;
/**
 * PIX copia-e-cola para pagamento.
 */
    PixCopiaECola?: string;
/**
 * QR Code do PIX.
 */
    PixQrCode?: string;
/**
 * PDF do boleto. Normalmente vem como base64 no formato data URI
 * ("data:application/pdf;base64,..."); conforme o gateway, pode vir como URL.
 * No BOLETO_PIX a emissão é assíncrona: pode vir vazio logo após a criação.
 */
    BoletoPdf?: string;
/**
 * Linha digitável do boleto (quando disponível).
 */
    LinhaDigitavel?: string;
}
