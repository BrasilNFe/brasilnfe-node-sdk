import { Pessoa } from '../Outros/Pessoa';

export interface NotaFiscalServicoEnvio {
    TipoAmbiente?: number;
    Lote?: number;
    nFSInfo?: NFSInfo[];
}

export interface NFSInfo {
    EnviarEmail?: boolean;
    SerieRps?: string;
    NumeroRps?: number;
    IdentificadorInterno?: string;
/**
 * Data da competência
 * Caso não informado será a data de emissão
 */
    DataCompetencia?: string;
    DataEmissao?: string;
    Tomador?: Tomador;
    Intermediario?: IntermediarioServico;
    ConstrucaoCivil?: ConstrucaoCivil;
    Servico?: Servico;
}

export interface Valores {
    ValorServico?: number;
    ValorInss?: number;
/**
 * Alíquota do ISS (%).
 */
    Aliquota?: number;
/**
 * Alíquota do Simples Nacional (%). Preenche o pTotTribSN (percentual total aproximado dos
 * tributos) da NFS-e nacional - equivale à opção "Informar alíquota do Simples Nacional" do
 * emissor nacional. Usada por optantes ME/EPP e MEI. Independente de Aliquota (ISS).
 */
    AliquotaSimplesNacional?: number;
    DescontoCondicionado?: number;
    DescontoIncondicionado?: number;
    OutrasRetencoes?: number;
    ValorDeducoes?: number;
    TotalTributos?: number;
    AliquotaIr?: number;
}

export interface ConfiguracaoImposto {
/**
 * Indide 0,65% de PIS caso o valor for maior que R$215,05
 */
    IncidePis?: boolean;
/**
 * Indide 3,00% de COFINS caso o valor for maior que R$215,05
 */
    IncideCofins?: boolean;
/**
 * Indide 1,00% de CSLL caso o valor for maior que R$215,05
 */
    IncideCsll?: boolean;
/**
 * Indide 1,50% (ou a alíquota informada em (Valores -> AliquotaIr)) de IR caso o valor for maior que R$666,66
 */
    IncideIr?: boolean;
/**
 * Indide 0,65% de PIS independente do valor
 */
    ForcarIncidenciaPis?: boolean;
/**
 * Indide 3,00% de COFINS independente do valor
 */
    ForcarIncidenciaCofins?: boolean;
/**
 * Indide 1,00% de CSLL independente do valor
 */
    ForcarIncidenciaCsll?: boolean;
/**
 * Indide 1,50% (ou a alíquota informada em (Valores -> AliquotaIr)) de IR independente do valor
 */
    ForcarIncidenciaIr?: boolean;
}

export interface Servico {
    Descricao?: string;
/**
 * Código do Serviço ou Tributação Nacional para o ambiente Nacional
 */
    ItemListaServico?: string;
/**
 * 0 - Sem Regime Especial
 * 1 - Microempresa municipal
 * 2 - Estimativa
 * 3 - Sociedade de profissionais
 * 4 - Cooperativa
 * 5 - MEI - Simples Nacional
 * 6 - ME EPP - Simples Nacional
 */
    RegimeEspecialTributacao?: number;
/**
 * Natureza da Operação
 * Alguns municípios possui códigos específicos, para mais informações, veja a documentação: Municípios com códigos específicos
 * 1 - Tributação no município
 * 2 - Tributação fora do município
 * 3 - Isenção
 * 4 - Imune
 * 5 - Exigibilidade suspensa por decisão judicial
 * 6 - Exigibilidade suspensa por procedimento administrativo
 * 7 - Não tributada (Governador Valadares)
 */
    NaturezaOperacao?: number;
/**
 * Incentio Cultural?
 * Sim - É incentivador cultural
 * Não - Não é incentivador cultiral
 */
    IncentivadorCultural?: boolean;
/**
 * Incentivo Fiscal?
 * Sim - É incentivador fiscal
 * Não - Não é incentivador fiscal
 */
    IncentivoFiscal?: boolean;
/**
 * Iss Retido?
 * Sim - Valor retido
 * Não - Valor não será retido
 */
    IssRetido?: boolean;
/**
 * Código de tributação do município
 */
    CodTributacaoMunicipio?: string;
/**
 * Código CNAE (Classificação Nacional de Atividades Econômicas)
 */
    CodigoCnae?: string;
/**
 * Código NBS (Nomenclatura Brasileira de Serviços).
 */
    CodNBS?: string;
/**
 * Exigibilidade ISS (Padrão 1)
 * 1 - Exigível
 * 2 - Não incidência
 * 3 - Isenção
 * 4 - Exportação
 * 5 - Imunidade
 * 6 - Exigibilidade Suspensa por Decisão Judicia
 * 7 - Exigibilidade Suspensa por Processo Administrativo
 */
    ExigibilidadeISS?: number;
/**
 * Código do municipio da incedência do serviço (Padrão - Município do Prestador)
 */
    CodMunicipioIncidencia?: string;
/**
 * Código do municipio da prestação do serviço (Padrão - Município do Prestador)
 */
    CodMunicipioPrestacao?: string;
    Valores?: Valores;
    ConfiguracaoImposto?: ConfiguracaoImposto;
/**
 * Bloco IBS/CBS (Reforma Tributária). Usar quando aplicável para NFS-e.
 */
    IBSCBS?: IBSCBSServico;
/**
 * Informações de comércio exterior (grupo comExt do leiaute nacional).
 * Se ExigibilidadeISS = 4 e este objeto não for enviado, valores padrão são aplicados
 * (modo Transfronteiriço, sem vínculo, sem mecanismo de apoio, moeda USD, valor = ValorServico).
 */
    ComercioExterior?: ComercioExterior;
}

/**
 * Grupo de informações de comércio exterior (comExt) exigido na exportação de serviço.
 */
export interface ComercioExterior {
/**
 * Modo de prestação do serviço (mdPrestacao). Padrão 1.
 * 1 - Transfronteiriço
 * 2 - Consumo no Brasil
 * 3 - Presença comercial no exterior
 * 4 - Movimento temporário de pessoas físicas
 */
    ModoPrestacao?: number;
/**
 * Vínculo entre prestador e tomador (vincPrest). Padrão 0.
 * 0 - Sem vínculo
 * 1 - Controlada
 * 2 - Controladora
 * 3 - Coligada
 * 4 - Matriz
 * 5 - Filial ou sucursal
 * 6 - Outro vínculo
 */
    VinculoPrestador?: number;
/**
 * Código da moeda estrangeira (tpMoeda), ISO 4217 numérico de 3 dígitos. Padrão 840 (USD).
 * Ex: 840 = Dólar americano, 978 = Euro, 826 = Libra esterlina.
 */
    CodMoeda?: number;
/**
 * Valor do serviço na moeda estrangeira informada (vServMoeda).
 * Se não informado, usa o ValorServico (valor em reais) - recomenda-se informar o valor real na moeda.
 */
    ValorMoedaEstrangeira?: number;
/**
 * Mecanismo de apoio/fomento ao comércio exterior pelo prestador (mecAFComexP). Padrão 1.
 * 1 - Nenhum
 * 2 - ACC; 3 - ACE; 4 - BNDES-Exim Pós; 5 - BNDES-Exim Pré; 6 - FGE; 7 - PROEX Equalização; 8 - PROEX Financiamento
 */
    ApoioPrestador?: number;
/**
 * Mecanismo de apoio/fomento ao comércio exterior pelo tomador (mecAFComexT). Padrão 1.
 * 1 - Nenhum ... 26 - ZPE (ver leiaute nacional para a lista completa)
 */
    ApoioTomador?: number;
/**
 * Movimentação temporária de bens (movTempBens). Padrão 1.
 * 1 - Não
 * 2 - Vinculada à Declaração de Importação
 * 3 - Vinculada à Declaração de Exportação
 */
    MovimentacaoTemporariaBens?: number;
/**
 * Número da Declaração de Importação (nDI). Opcional.
 */
    NumeroDI?: string;
/**
 * Número do Registro de Exportação (nRE). Opcional.
 */
    NumeroRE?: string;
/**
 * Compartilhar as informações da NFS-e com o MDIC/Secretaria de Comércio Exterior (mdic). Padrão 0.
 * 0 - Não enviar
 * 1 - Enviar
 */
    CompartilharMDIC?: number;
}

export interface IntermediarioServico {
    RzSocial?: string;
    CPFCNPJ?: string;
    InscricaoMunicipal?: string;
}

export interface IBSCBSServico {
/**
 * Código de Classificação Tributária (Padrão 000001)
 */
    CodClassTrib?: string;
/**
 * Código Indicador da Operação
 */
    CodIndicadorOperacao?: string;
/**
 * Indica operação de uso ou consumo pessoal (indFinal). 0 - Não (padrão); 1 - Sim.
 */
    IndicadorUsoFinal?: number;
/**
 * Indicador do destinatário dos serviços (indDest). 0 - destinatário é o próprio tomador (padrão); 1 - destinatário não é o adquirente.
 */
    IndicadorDestinatario?: number;
/**
 * Alíquota do IBS Estadual (pIBSUF) em %. Se omitido, usa 0,10% (padrão de teste 2025-2026).
 */
    AliqIbsUf?: number;
/**
 * Alíquota do IBS Municipal (pIBSMun) em %. Se omitido, usa 0% (padrão de teste 2025-2026).
 */
    AliqIbsMun?: number;
/**
 * Alíquota da CBS (pCBS) em %. Se omitido, usa 0,90% (padrão de teste 2025-2026).
 */
    AliqCbs?: number;
/**
 * Base de cálculo do IBS/CBS (vBC). Se omitido, usa ValorServico - DescontoIncondicionado.
 */
    BaseCalculo?: number;
}

export interface ConstrucaoCivil {
    CodObra?: string;
    Art?: string;
}

export interface Tomador extends Pessoa {
    CpfCnpj?: string;
    NmTomador?: string;
    Im?: string;
}

