import { NewError } from '../Outros/Erros';

/**
 * Resultado do cancelamento de assinatura.
 */
export interface CancelarAssinaturaRetorno extends NewError {
/**
 * Mensagem informativa da operação.
 */
    Mensagem?: string;
/**
 * Ids das assinaturas canceladas no gateway de cobrança.
 */
    AssinaturasCanceladas?: number[];
/**
 * true quando o cancelamento é no fim do período (assinatura paga): o(s) serviço(s)
 * continuam ativos até AcessoAte e são desativados automaticamente depois.
 * false = desativação imediata (nunca foi paga).
 */
    AcessoAteFimDoPeriodo?: boolean;
/**
 * Data até quando o acesso continua, quando cancelado no fim do período.
 */
    AcessoAte?: string;
}
