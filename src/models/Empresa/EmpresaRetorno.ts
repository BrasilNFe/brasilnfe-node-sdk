import { Erros } from '../Outros/Erros';

export interface EmpresaRetorno extends Erros {
    token?: string;
    status?: boolean;
/**
 * Eco do CodigoInterno enviado no cadastro/edição, permitindo correlacionar
 * a resposta da API com o cadastro interno do ERP/sistema do integrador.
 */
    codigoInterno?: string;
}

