import { NewError } from '../Outros/Erros';

/**
 * Serviço contratável e sua situação atual na empresa.
 */
export interface ServicoSituacao {
/**
 * Nome do serviço. É exatamente o texto aceito no campo Servicos de
 * AtivarAssinaturaEnvio.
 */
    Nome?: string;
/**
 * true quando o serviço está ativo para a empresa.
 */
    Ativo?: boolean;
}

/**
 * Resultado da consulta de serviços da empresa: o catálogo de serviços
 * contratáveis e a situação (ativo ou não) de cada um para a empresa.
 */
export interface ConsultarServicosRetorno extends NewError {
/**
 * Serviços disponíveis, com a situação atual na empresa.
 */
    Servicos?: ServicoSituacao[];
}
