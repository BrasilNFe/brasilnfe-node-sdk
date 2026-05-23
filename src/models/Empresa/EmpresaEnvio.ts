import { Endereco, Contato } from '../Outros/Pessoa';

export interface EmpresaEnvio {
/**
 * CNPJ
 */
    CNPJ?: string;
/**
 * Código de identificação da empresa no sistema do integrador.
 * Campo opcional e livre, usado pelo integrador para correlacionar a empresa
 * do Brasil NFe com o cadastro interno do próprio ERP/sistema.
 */
    CodigoInterno?: string;
/**
 * Nome Fantasia
 */
    NmFantasia?: string;
/**
 * Razão Social
 */
    RzSocial?: string;
/**
 * Inscrição Estadual
 */
    IE?: string;
/**
 * Inscrição Municipal
 */
    IM?: string;
/**
 * Código Regime Tributário
 * 1 - Simples Nacional
 * 2 - Simples Nacional - Exesso Sublimite
 * 3 - Regime Normal
 */
    CRT?: number;
/**
 * CNAE
 */
    CNAE?: string;
/**
 * Token Brasil NFe (Sómente para consulta)
 */
    Token?: string;
/**
 * Site da empresa
 */
    Site?: string;
/**
 * Código do grupo
 */
    CodGrupo?: number;
/**
 * Informações de endereço
 */
    Endereco?: Endereco;
/**
 * Informações de contato
 */
    Contato?: Contato;
/**
 * Configurações da empresa
 */
    Configuracao?: Configuracao;
}

export interface Configuracao {
/**
 * Informações de NFS-e
 */
    NFSe?: NFSe;
/**
 * Informações de NF-e
 */
    NFe?: NFe;
/**
 * Informações de NFC-e
 */
    NFCe?: NFCe;
/**
 * Informações da empresa como transportador, comuns aos documentos de
 * transporte (CT-e e MDF-e).
 */
    Transportador?: Transportador;
}

export interface Transportador {
/**
 * Registro Nacional de Transportadores Rodoviários de Cargas (RNTRC) da ANTT.
 * Obrigatório para emissão de CT-e (modelo 57) e MDF-e (modelo 58) quando o
 * emitente atua como transportador rodoviário.
 */
    RNTRC?: string;
}

export interface NFCe {
/**
 * Identificado do código de segurança do contribuinte (Ambiente de Produção)
 */
    IdCSCProducao?: string;
/**
 * Código de segurança do contribuinte (Ambiente de Produção)
 */
    CSCProducao?: string;
/**
 * Identificado do código de segurança do contribuinte (Ambiente de Homologação)
 */
    IdCSCHomologacao?: string;
/**
 * Código de segurança do contribuinte (Ambiente de Homologação)
 */
    CSCHomologacao?: string;
}

export interface NFe {
/**
 * Manifestar ciência da operação automáticamente (Permite buscar notas de entrada)
 */
    AutoManifestarCienciaOperacao?: boolean;
}

export interface NFSe {
/**
 * Token da empresa que possui a procuração para emissão de notas
 */
    TokenProcurador?: string;
/**
 * Login (somente municípios que utilizam login/senha para autenticação no webservice)
 */
    LoginWebService?: string;
/**
 * Senha (somente municípios que utilizam login/senha para autenticação no webservice)
 */
    SenhaWebService?: string;
/**
 * Cpf do usuário vinculado a empresa (somente municípios que utilizam login/senha para autenticação no webservice)
 */
    CpfWebService?: string;
}
