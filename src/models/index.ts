export interface NotaFiscalEnvio {
    serie?: number | null;
    numero?: number | null;
    lote?: number | null;
    dataEntradaSaida?: string | null;
    dataEmissao?: string | null;
    codigo?: string;
    justificativa?: string;
    nfReferencia?: string[];
    indicadorPresenca?: number;
    indicadorIntermediador?: boolean;
    consumidorFinal?: boolean;
    calcularIBPT?: boolean;
    naturezaOperacao?: string;
    modeloDocumento?: number;
    finalidade?: number;
    tipoAmbiente?: number;
    observacao?: string;
    observacaoFisco?: string;
    identificadorInterno?: string;
    enviarEmail?: boolean;
    cliente?: Cliente;
    produtos?: Produto[];
    pagamentos?: Pagamento[];
    cobranca?: Cobranca;
    transporte?: Transporte;
    exporta?: Exporta;
    entrega?: Entrega;
}

export interface Cliente {
    cpfCnpj?: string;
    nmCliente?: string;
    indicadorIe?: number;
    ie?: string;
    isUf?: string;
    endereco?: Endereco; // Assumindo estrutura baseada no C#
    contato?: Contato;
}

export interface Endereco {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    numero?: string;
    bairro?: string;
    codMunicipio?: string;
    municipio?: string;
    uf?: string;
    codPais?: number | null;
    pais?: string;
}

export interface Contato {
    telefone?: string;
    email?: string;
    fax?: string;
}

export interface Produto {
    nmProduto?: string;
    codProdutoServico?: string;
    ean?: string;
    ncm?: string;
    cest?: string;
    quantidade?: number;
    unidadeComercial?: string;
    unidadeComercialTributavel?: string;
    valorDesconto?: number;
    valorUnitario?: number;
    valorTotal?: number;
    valorSeguro?: number | null;
    valorFrete?: number | null;
    valorOutrasDespesas?: number | null;
    cfop?: number;
    // ... adicione os outros campos conforme NotaFiscalEnvio.cs
}

// Interfaces placeholders para os demais envios
export interface NotaFiscalServicoEnvio {}
export interface ManifestoTransporteEnvio {}
export interface NFEnerComEnvio {}
export interface NotaFiscalComplementarEnvio {}
export interface SintegraEnvio {}
export interface FciEnvio {}
export interface ArqEnerComEnvio {}
export interface SpedEnvio {}
export interface UnificarSpedEnvio {}
export interface PegarArquivoEnvio { id: string; }
export interface PegarArquivoEventoEnvio { id: string; }
export interface ObterArquivosRangeEnvio {}
export interface CancelarNotaFiscalEnvio {}
export interface CartaCorrecaoEnvio {}
export interface InutilizarNumeracaoEnvio {}
export interface ManifestarNotaFiscalEnvio {}
export interface EncerrarManifestoTransporteEnvio {}
export interface StatusSefazEnvio {}
export interface PreVisualizarNotaFiscalEnvio {}
export interface BuscarNotaFiscalServicoEnvio {}
export interface BuscarNotaFiscalEnvio {}
export interface ConsultarCadastroEnvio {}
export interface CertificadoEnvio {}
export interface EmpresaEnvio {}
export interface Pagamento {}
export interface Cobranca {}
export interface Transporte {}
export interface Exporta {}
export interface Entrega {}