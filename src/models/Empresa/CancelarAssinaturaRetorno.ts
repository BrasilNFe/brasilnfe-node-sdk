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
 * Serviços desativados na empresa (textos).
 */
    ServicosDesativados?: string[];
}
