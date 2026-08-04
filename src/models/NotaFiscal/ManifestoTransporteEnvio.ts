export interface ManifestoTransporteEnvio {
/**
 * Tipo de ambiente (Padrão 2)
 * 1 - Produção
 * 2 - Homologação
 */
    tipoAmbiente?: number;
    identificadorInterno?: string;
    codigo?: number;
    lote?: number;
    numero?: number;
    serie?: number;
/**
 * Tipo de emitente (Padrão 2)
 * 1 - Prestador de Serviço de Transporte
 * 2 - Transportador de carga própria
 */
    tipoEmitente?: number;
    DataEmissao?: string;
    ufCarregamento?: string;
    ufDescarregamento?: string;
    observacao?: string;
    observacaoFisco?: string;
/**
 * Modalidade de Transporte (Padrão 1)
 * 1 - Rodoviário
 * 2 - Aério
 * 3 - Aquaviário
 * 4 - Ferroviário
 */
    modalidade?: number;
/**
 * Valor total da carga / mercadorias transportadas
 */
    valor?: number;
/**
 * Peso Bruto Total da Carga / Mercadorias transportadas em KG
 */
    peso?: number;
    Rodoviario?: Rodoviario;
    Aereo?: Aereo;
    Aquaviario?: Aquaviario;
    Ferroviario?: Ferroviario;
    seguros?: Seguro[];
    carregamentos?: Carregamento[];
    descarregamentos?: Descarregamento[];
    percursoUfs?: string[];
/**
 * Produto predominante transportado. Opcional.
 */
    produtoPredominante?: ProdutoPredominante;
}

export interface Aereo {
    nacionalidade?: string;
    matricula?: string;
    numeroVoo?: string;
    aerodromoEmbarque?: string;
    aerodromoDestino?: string;
    dataVoo?: string;
}

export interface Aquaviario {
    cnpjAgencia?: string;
    tipoEmbarcacao?: number;
    codEmbarcacao?: string;
    nomeEmbarcacao?: string;
    numeroViagem?: string;
    codPortoEmbarque?: string;
    codPortoDestino?: string;
}

export interface Ferroviario {
    prefixo?: string;
    DataLiberacao?: string;
    origem?: string;
    destino?: string;
    quantidadeVagoes?: number;
    Vagoes?: Vagao[];
}

export interface Vagao {
    serie?: number;
    numero?: number;
    sequencia?: number;
    toneladaUtil?: number;
/**
 * Peso Base de Cálculo de Frete em Toneladas
 */
    pesoBc?: number;
/**
 * Peso Real em Toneladas
 */
    pesoReal?: number;
}

export interface Rodoviario {
/**
 * Tipo de Rodado (Padrão 1)
 * 1 - Truck
 * 2 - Toco
 * 3 - Cavalo Mecânico
 * 4 - VAN
 * 5 - Utilitário
 * 6 - Outros
 */
    tipoRodado?: number;
/**
 * Tipo de Carroceria (Padrão 1)
 * 0 - Não aplicavel
 * 1 - Aberta
 * 2 - Fechado Baú
 * 3 - Granelera
 * 4 - Porta Container
 * 5 - Sider
 */
    tipoCarroceria?: number;
    placa?: string;
    renavam?: string;
    uf?: string;
/**
 * Tara em KG
 */
    tara?: number;
/**
 * Capacidade em KG do veículo de tração. Opcional.
 */
    capKG?: number;
/**
 * Capacidade em M3 do veículo de tração. Opcional.
 */
    capM3?: number;
    CIOT?: CIOT;
    condutores?: Condutor[];
/**
 * Lista de veículos de reboque acoplados à tração. Opcional.
 */
    reboques?: VeiculoReboque[];
/**
 * Informações dos contratantes do serviço de transporte (grupo infANTT/infContratante). Opcional.
 */
    contratantes?: Contratante[];
/**
 * Informações de vale-pedágio (grupo infANTT/valePed). Opcional.
 */
    valePedagio?: ValePedagio;
/**
 * Informações de pagamento do frete (grupo infANTT/infPag). Opcional.
 */
    pagamentos?: InformacaoPagamento[];
}

export interface InformacaoPagamento {
/**
 * CPF, CNPJ ou identificador estrangeiro do responsável pelo pagamento do frete.
 */
    cpfCnpjResponsavel?: string;
/**
 * Razão social ou nome do responsável pelo pagamento.
 */
    nomeResponsavel?: string;
/**
 * Componentes do pagamento do frete.
 */
    componentes?: ComponentePagamento[];
/**
 * Valor total do contrato.
 */
    valorContrato?: number;
/**
 * Operação de transporte de alto desempenho (frota dedicada/fidelizada).
 */
    altoDesempenho?: boolean;
/**
 * Forma de pagamento: 0 - à vista; 1 - a prazo.
 */
    indicadorPagamento?: number;
/**
 * Valor do adiantamento (usar apenas em pagamento a prazo). Opcional.
 */
    valorAdiantamento?: number;
/**
 * Concordância em antecipar o adiantamento.
 */
    anteciparAdiantamento?: boolean;
/**
 * Parcelas do pagamento (informar somente se a prazo).
 */
    parcelas?: ParcelaPagamento[];
/**
 * Permissão de antecipação das parcelas: 0 - não permite; 1 - permite; 2 - permite mediante confirmação. Opcional.
 */
    tipoAntecipacao?: number;
/**
 * Informações bancárias para recebimento do frete.
 */
    infoBancaria?: InfoBancaria;
}

export interface ComponentePagamento {
/**
 * Tipo do componente: 01 - Vale-Pedágio; 02 - Impostos, taxas e contribuições; 03 - Despesas; 99 - Outros.
 */
    tipo?: string;
/**
 * Valor do componente.
 */
    valor?: number;
/**
 * Descrição do componente (usar quando tipo = 99).
 */
    descricao?: string;
}

export interface ParcelaPagamento {
/**
 * Número da parcela.
 */
    numero?: number;
/**
 * Data de vencimento da parcela. Opcional.
 */
    vencimento?: string;
/**
 * Valor da parcela. Opcional.
 */
    valor?: number;
}

export interface InfoBancaria {
/**
 * Número do banco. Informar junto com a agência (ou use cnpjInstituicaoPagamento, ou pix).
 */
    codBanco?: string;
/**
 * Número da agência bancária.
 */
    codAgencia?: string;
/**
 * CNPJ da instituição de pagamento eletrônico do frete (alternativa ao banco/agência).
 */
    cnpjInstituicaoPagamento?: string;
/**
 * Chave PIX para recebimento do frete (alternativa ao banco/agência).
 */
    pix?: string;
}

export interface Contratante {
/**
 * CPF, CNPJ ou identificador estrangeiro do contratante do serviço.
 */
    cpfCnpj?: string;
/**
 * Razão social ou nome do contratante.
 */
    nome?: string;
/**
 * Número do contrato para prestações continuadas.
 */
    nroContrato?: string;
/**
 * Valor global do contrato (informar somente no pagamento a prazo). Opcional.
 */
    vContratoGlobal?: number;
}

export interface ValePedagio {
    dispositivos?: ValePedagioDispositivo[];
/**
 * Categoria de combinação veicular (02 a 14 conforme o número de eixos).
 */
    categoriaCombinacaoVeicular?: string;
}

export interface ValePedagioDispositivo {
    cnpjFornecedor?: string;
/**
 * CPF/CNPJ do pagador (informar quando não for o emitente).
 */
    cpfCnpjPagador?: string;
    numeroComprovante?: string;
    valor?: number;
/**
 * Tipo do vale-pedágio.
 * 01 - TAG
 * 02 - Cupom
 * 03 - Cartão
 */
    tipo?: string;
}

export interface VeiculoReboque {
/**
 * Placa do reboque (sem máscara).
 */
    placa?: string;
    renavam?: string;
/**
 * UF de licenciamento do reboque (sigla de 2 letras).
 */
    uf?: string;
/**
 * Tara em KG
 */
    tara?: number;
    capKG?: number;
    capM3?: number;
/**
 * Tipo de Carroceria
 * 0 - Não aplicável
 * 1 - Aberta
 * 2 - Fechado Baú
 * 3 - Granelera
 * 4 - Porta Container
 * 5 - Sider
 */
    tipoCarroceria?: number;
}

export interface ProdutoPredominante {
/**
 * Tipo de Carga (Resolução ANTT 5.849/2019). Valor de 1 a 11.
 * 1 - Granel sólido
 * 2 - Granel líquido
 * 3 - Frigorificada
 * 4 - Conteinerizada
 * 5 - Carga Geral
 * 6 - Neogranel
 * 7 - Perigosa (granel sólido)
 * 8 - Perigosa (granel líquido)
 * 9 - Perigosa (carga frigorificada)
 * 10 - Perigosa (conteinerizada)
 * 11 - Perigosa (carga geral)
 */
    tpCarga?: number;
/**
 * Descrição do produto predominante (1 a 120 caracteres).
 */
    descricao?: string;
/**
 * GTIN/EAN do produto. Opcional. Use "SEM GTIN" se não houver.
 */
    cEan?: string;
/**
 * Código NCM do produto. Opcional. Aceita 2 ou 8 dígitos.
 */
    ncm?: string;
/**
 * Informações de carga lotação. Opcional - só preencha quando o MDF-e for de carga lotação.
 */
    infLotacao?: InfoCargaLotacao;
}

export interface InfoCargaLotacao {
/**
 * Local de carregamento da lotação. Informe CEP OU (latitude + longitude).
 */
    localCarrega?: LocalLotacao;
/**
 * Local de descarregamento da lotação. Informe CEP OU (latitude + longitude).
 */
    localDescarrega?: LocalLotacao;
}

export interface LocalLotacao {
/**
 * CEP do local (8 dígitos). Quando informado, latitude/longitude são ignorados.
 */
    cep?: string;
/**
 * Latitude. Informe junto com longitude quando não houver CEP.
 */
    latitude?: string;
/**
 * Longitude. Informe junto com latitude quando não houver CEP.
 */
    longitude?: string;
}

export interface CIOT {
    codigo?: string;
    cnpj?: string;
}

export interface Condutor {
    nome?: string;
    cpf?: string;
}

export interface Carregamento {
    codMunicipio?: number;
    municipio?: string;
}

export interface Descarregamento {
    codMunicipio?: number;
    municipio?: string;
    chaveDfe?: string;
    transportePerigosos?: TransportePerigosoInfo[];
}

export interface TransportePerigosoInfo {
    codigoONU?: string;
    quantidade?: number;
}

export interface Seguro {
/**
 * Identificação do Ambiente (Padrão 1)
 * 1 - Emitente do MDF-e
 * 2 - Responsável pela contratação
 */
    indicadorResponsavel?: number;
    cpfCnpjResponsavel?: string;
    cnpjSegurador?: string;
    nomeSegurador?: string;
/**
 * Número da apólice de seguro. Obrigatório para modal rodoviário no MDF-e versão 3.00.
 */
    numeroApolice?: string;
/**
 * Lista de números de averbação do seguro (0..N). Opcional.
 */
    numerosAverbacao?: string[];
}

