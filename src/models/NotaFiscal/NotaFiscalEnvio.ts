import { Pessoa } from '../Outros/Pessoa';

export interface Cliente extends Pessoa {
    CpfCnpj?: string;
    NmCliente?: string;
/**
 * 1 - Contribuinte ICMS (informar a IE do destinatário)
 * 2 - Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS
 * 9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS
 */
    IndicadorIe?: number;
    Ie?: string;
    IsUf?: string;
}

export interface Entrega extends Pessoa {
    CpfCnpj?: string;
    Nome?: string;
    Ie?: string;
}

export interface Produto {
/**
 * Descrição do Produto
 */
    NmProduto?: string;
/**
 * Código do produto ou serviço
 */
    CodProdutoServico?: string;
/**
 * GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras (Noramalmente sem GTIN)
 */
    EAN?: string;
/**
 * Código NCM (8 posições). Em caso de item de serviço ou item que não tenham produto (Ex. transferência de
 * crédito, crédito do ativo imobilizado, etc.), informar o código 00 (zeros) (v2.0)
 */
    NCM?: string;
/**
 * Código CEST
 */
    CEST?: string;
/**
 * Quantidade Comercial  do produto, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros.
 */
    Quantidade?: number;
/**
 * Quantidade Comercial do produto tributável, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros.
 */
    QuantidadeTributavel?: number;
/**
 * Unidade comercial (Unidade de Medida)
 */
    UnidadeComercial?: string;
/**
 * Unidade comercial (Unidade de Medida Tributável)
 */
    UnidadeComercialTributavel?: string;
/**
 * Valor do Desconto
 */
    ValorDesconto?: number;
/**
 * Valor Unitario
 */
    ValorUnitario?: number;
/**
 * Valor Unitario Tributável
 */
    ValorUnitarioTributavel?: number;
/**
 * Valor Total Bruto
 */
    ValorTotal?: number;
/**
 * Valor Seguro
 */
    ValorSeguro?: number;
/**
 * Valor Frete
 */
    ValorFrete?: number;
/**
 * Valor Outras Despesas
 */
    ValorOutrasDespesas?: number;
/**
 * Código Fiscal de Operações e Prestações
 */
    CFOP?: number;
/**
 * Número do item do Pedido de Compra
 */
    NItemPed?: number;
/**
 * Número do Pedido de Compra
 */
    xPed?: string;
/**
 * Chave de acesso (44 dígitos) da NF-e ORIGINAL que este item está devolvendo. Usado apenas em NF-e de
 * devolução (Finalidade = 4, Reforma Tributária / NT 2025.002). Quando preenchida, o item é referenciado
 * pelo grupo DFeReferenciado (por item) em vez do NFReferencia (nível nota) - os dois não podem coexistir.
 */
    ChaveAcessoReferenciada?: string;
/**
 * Número do item (nItem) na NF-e ORIGINAL a que este item de devolução corresponde. É o número do item na
 * nota de venda original, NÃO o número do item nesta devolução. Opcional; acompanha ChaveAcessoReferenciada.
 */
    NItemReferenciado?: number;
/**
 * Número de controle da FCI - Ficha de Conteúdo de Importação
 */
    nFCI?: string;
/**
 * Código de Beneficio Fiscal na UF
 */
    cBenef?: string;
/**
 * Informaçoes adicional
 */
    InformacaoAdicional?: string;
/**
 * 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8
 * 1 - Estrangeira - Importação direta, exceto a indicada no código 6
 * 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7
 * 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%
 * 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes
 * 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%
 * 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural
 * 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural
 * 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%
 */
    OrigemProduto?: number;
/**
 * Código do grupo tributário cadastrado no Painel, para automação de impostos.
 * QUANDO INFORMADO: o sistema aplica automaticamente CFOP, CST, ICMS, IPI, PIS e COFINS
 * do grupo — você NÃO precisa preencher o bloco Imposto nem o CFOP do item.
 */
    CodTributacao?: string;
/**
 * ICMS, IPI, PIS, COFINS
 */
    Imposto?: Imposto;
    Combustivel?: Combustivel;
    DeclaracaoImportacao?: DeclaracaoImportacao;
/**
 * Rastreabilidade do produto (lote, validade, fabricação). Comum para medicamentos, agrotóxicos, bebidas.
 */
    Rastros?: Rastreabilidade[];
/**
 * Informações de produtos agropecuários e florestais (NT 2024.003 - Grupo ZF).
 * Obrigatório a partir de 01/03/2026 quando o NCM cair em 01XXXXXX / 0301XXXX
 * (animais vivos - GuiaTransito), 06-12XXXX (vegetais primários), 3808.52 a
 * 3808.99 (defensivos). Já obrigatório em BA, GO, MA, MT para NCM 0102XXXX.
 */
    Agropecuaria?: Agropecuaria;
}

export interface Agropecuaria {
/**
 * Defensivos agrícolas aplicados (0 a 20). Cada item exige NumeroReceituario e CpfResponsavelTecnico.
 */
    Defensivos?: Defensivo[];
/**
 * Guia de trânsito que autoriza o transporte sanitário do animal, vegetal ou produto florestal.
 */
    GuiaTransito?: GuiaTransito;
}

export interface Defensivo {
/**
 * Número da receita ou receituário do agrotóxico/defensivo agrícola (1-30 caracteres). Obrigatório.
 */
    NumeroReceituario?: string;
/**
 * CPF (11 dígitos) do engenheiro agrônomo, florestal ou técnico agrícola responsável. Obrigatório.
 */
    CpfResponsavelTecnico?: string;
}

export interface GuiaTransito {
/**
 * Tipo da guia de trânsito. Obrigatório.
 * 1 - GTA (Guia de Trânsito Animal)
 * 2 - TTA (Termo de Trânsito Animal)
 * 3 - DTA (Documento de Transferência Animal)
 * 4 - ATV (Autorização de Trânsito Vegetal)
 * 5 - PTV (Permissão de Trânsito Vegetal)
 * 6 - GTV (Guia de Trânsito Vegetal)
 * 7 - Guia Florestal (DOF, SisFlora-PA/MT, SIAM-MG)
 */
    TipoGuia?: number;
/**
 * Sigla da UF emissora da guia (2 caracteres). Obrigatório.
 */
    UfGuia?: string;
/**
 * Série da guia (1-9 dígitos). Opcional.
 */
    SerieGuia?: string;
/**
 * Número da guia (1-9 dígitos). Obrigatório.
 */
    NumeroGuia?: string;
}

export interface Rastreabilidade {
/**
 * Número do lote do produto (1-20 caracteres)
 */
    NumeroLote?: string;
/**
 * Quantidade de produto no lote
 */
    QuantidadeLote?: number;
/**
 * Data de fabricação/produção
 */
    DataFabricacao?: string;
/**
 * Data de validade
 */
    DataValidade?: string;
/**
 * Código de agregação (opcional)
 */
    CodigoAgregacao?: string;
}

export interface Imposto {
    IBSCBS?: IBSCBS;
    ICMS?: ICMS;
    IPI?: IPI;
    PIS?: PIS;
    COFINS?: COFINS;
    Importacao?: Importacao;
}

export interface IBSCBS {
/**
 * Código de Classificação Tributária (Padrão 000001)
 */
    CodClassificacaoTributaria?: string;
/**
 * Base de cálculo
 */
    BaseCalculo?: number;
/**
 * Alíquota do IBS de competência das UF
 */
    AliquotaIBSUF?: number;
/**
 * Alíquota do IBS de competência do Município
 */
    AliquotaIBSMun?: number;
/**
 * Alíquota da CBS
 */
    AliquotaCBS?: number;
/**
 * Percentual de redução da alíquota do IBS (pRedAliq de gIBSUF/gIBSMun), usado no grupo gRed dos CST
 * 011/200/515. Fixo por cClassTrib na tabela oficial (ex.: 100 para 200003 alimentação/Anexo I, 60 para
 * educação/saúde). Quando null, é preenchido automaticamente pela tabela oficial (TabelaReducaoIbsCbs).
 */
    PercentualReducaoIBS?: number;
/**
 * Percentual de redução da alíquota da CBS (pRedAliq de gCBS). Pode divergir de PercentualReducaoIBS
 * (ex.: 200025 = IBS 60 / CBS 100). Quando null, é preenchido automaticamente pela tabela oficial.
 */
    PercentualReducaoCBS?: number;
/**
 * Percentual de diferimento (pDif do grupo gDif), usado nos CST 510/515. Informado pelo contribuinte -
 * NÃO é fixo por cClassTrib. O valor diferido (vDif) é deduzido do IBS/CBS devido.
 */
    PercentualDiferimento?: number;
}

export interface ICMS {
/**
 * Código da Situação Tributária (CST)
 */
    CodSituacaoTributaria?: string;
/**
 * Alíquota ICMS - Obrigatório para situação tributária nº 101 e 201
 */
    AliquotaICMS?: number;
/**
 * Alíquota ICMS ST - Obrigatório para situação tributária nº 101 e 201
 */
    AliquotaICMSST?: number;
/**
 * Alíquota - Obrigatório para situação tributária nº 201, 202 e 203
 */
    AliquotaMVA?: number;
/**
 * Alíquota aplicável de cálculo de crédito - Obrigatório para situação tributária nº 101 e 201
 */
    AliquotaCredito?: number;
/**
 * Redução ICMS
 */
    RedICMS?: number;
/**
 * Redução ICMS ST
 */
    RedICMSST?: number;
/**
 * Base de Cálculo (Quando não informado, é o valor dos produtos)
 */
    BaseCalculo?: number;
/**
 * Valor do Icms (Calculado Automaticamente quando não informado)
 */
    ValorIcms?: number;
/**
 * 1 - Táxi;
 * 2 - Deficiente Físico;
 * 3 - Produtor Agropecuário;
 * 4 - Frotista / Locadora;
 * 5 - Diplomático / Consular;
 * 6 - Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);
 * 7 - SUFRAMA
 * 8 - Venda a Orgãos Publicos
 * 9 - Outros. (v2.0)
 * 10 - Deficiente Condutor (Convênio ICMS 38/12). (v3.1)
 * 11 - Deficiente não Condutor (Convênio ICMS 38/12). (v3.1)
 * 16 - Olimpíadas Rio 2016
 */
    motivoDesoneracaoIcms?: number;
    valorDesoneracaoIcms?: number;
/**
 * Percentual de diferimento (Utilizado somente no CST 51)
 */
    aliquotaDiferimento?: number;
/**
 * 0 - Margem Valor Agregado (%)
 * 1 - Pauta (valor)
 * 2 - Preço Tabelado Máximo (valor)
 * 3 - Valor da Operação
 */
    modalidadeBcIcms?: number;
/**
 * Grupo de ICMS-ST retido em operação anterior. Preencher SOMENTE em CST 60 ou CSOSN 500
 * (revenda de mercadoria cujo ICMS-ST já foi retido por substituição tributária).
 * Quando informado, prevalece sobre a estimativa automática derivada da configuração de ST do produto.
 */
    STRetido?: ICMSSTRetido;
/**
 * adRemICMSRet - Alíquota ad rem do ICMS retido anteriormente. Obrigatório no CST 61
 * (tributação monofásica sobre combustíveis cobrada anteriormente).
 */
    AliquotaAdRemRetido?: number;
/**
 * qBCMonoRet - Quantidade tributada retida anteriormente (em unidade de medida da legislação).
 * Opcional no CST 61. Quando não informada, assume a quantidade comercial do item.
 */
    QuantidadeMonoRetido?: number;
/**
 * vICMSMonoRet - Valor do ICMS retido anteriormente no CST 61. Opcional: quando não informado,
 * é calculado por QuantidadeMonoRetido x AliquotaAdRemRetido.
 */
    ValorIcmsMonoRetido?: number;
}

/**
 * ICMS retido anteriormente por substituição tributária (grupo do CST 60 / CSOSN 500).
 * Os valores corretos vêm da nota de ENTRADA do produto. Em operação não consumidor final,
 * os quatro primeiros campos são exigidos juntos (Rejeição 938, validação a critério da UF).
 */
export interface ICMSSTRetido {
/**
 * vBCSTRet - Base de cálculo do ICMS-ST retido na operação anterior.
 */
    BaseCalculo?: number;
/**
 * pST - Alíquota suportada pelo consumidor final (alíquota interna do destino + FCP).
 */
    AliquotaConsumidorFinal?: number;
/**
 * vICMSSubstituto - Valor do ICMS próprio do substituto cobrado na operação anterior.
 */
    ValorICMSSubstituto?: number;
/**
 * vICMSSTRet - Valor do ICMS-ST retido na operação anterior. Opcional: quando não informado,
 * é calculado por (BaseCalculo x AliquotaConsumidorFinal / 100 - ValorICMSSubstituto). Informe
 * o valor fiel da nota de entrada quando ele divergir da fórmula padrão.
 */
    ValorICMSST?: number;
/**
 * vBCFCPSTRet - Base de cálculo do FCP retido por ST na operação anterior.
 */
    BaseCalculoFCP?: number;
/**
 * pFCPSTRet - Alíquota do FCP retido por ST na operação anterior.
 * O valor (vFCPSTRet) é calculado automaticamente por BaseCalculoFCP x AliquotaFCP / 100.
 */
    AliquotaFCP?: number;
/**
 * pRedBCEfet - Percentual de redução da base de cálculo efetiva (consumidor final).
 */
    PercentualReducaoBaseEfetiva?: number;
/**
 * vBCEfet - Base de cálculo efetiva (consumidor final). Opcional: quando não informada, é calculada
 * por (ValorTotal + frete + seguro + outras despesas - desconto) x (1 - PercentualReducaoBaseEfetiva/100).
 * Informe o valor fiel quando a composição da base divergir.
 */
    BaseCalculoEfetiva?: number;
/**
 * pICMSEfet - Alíquota do ICMS efetiva (consumidor final). O valor (vICMSEfet) é calculado
 * automaticamente por BaseCalculoEfetiva x AliquotaEfetiva / 100.
 */
    AliquotaEfetiva?: number;
}

export interface IPI {
/**
 * Código de Enquadramento Legal do IPI
 */
    CodEnquadramento?: string;
/**
 * Código da Situação Tributária do IPI
 */
    CodSituacaoTributaria?: string;
/**
 * Aliquota do IPI
 */
    Aliquota?: number;
/**
 * Valor do IPI devolvido
 */
    ValorIpiDevolvido?: number;
/**
 * Percentual da mercadoria devolvida
 */
    PercentualMercadoriaDevolvida?: number;
}

export interface PIS {
/**
 * Código da Situação Tributária do PIS
 */
    CodSituacaoTributaria?: string;
/**
 * Aliquota do PIS
 */
    Aliquota?: number;
/**
 * Base de Cálculo (Quando não informado, é o valor dos produtos)
 */
    BaseCalculo?: number;
}

export interface COFINS {
/**
 * Código da Situação Tributária do COFINS
 */
    CodSituacaoTributaria?: string;
/**
 * Aliquota do COFINS
 */
    Aliquota?: number;
/**
 * Base de Cálculo (Quando não informado, é o valor dos produtos)
 */
    BaseCalculo?: number;
}

export interface Importacao {
    BaseCalculo?: number;
    DespesasAduaneiras?: number;
    Valor?: number;
    ValorIOF?: number;
}

export interface Pagamento {
/**
 * 0 - A vista, 1 - Prazo
 */
    IndicadorPagamento?: number;
    Desconto?: number;
    Descricao?: string;
/**
 * 01 - Dinheiro
 * 02 - Cheque
 * 03 - Cartão de Crédito
 * 04 - Cartão de Débito
 * 05 - Cartão da Loja (Private Label), Crediário Digital, Outros Crediários
 * 10 - Vale Alimentação
 * 11 - Vale Refeição
 * 12 - Vale Presente
 * 13 - Vale Combustível
 * 14 - Duplicata Mercantil
 * 15 - Boleto Bancário
 * 16 - Depósito Bancário
 * 17 - Pagamento Instantâneo (PIX) - Dinâmico
 * 18 - Transferencia Bancária, Carteira Digital
 * 19 - Programa de fidelidade, cashback, crédito virtual
 * 20 - Pagamento Instantâneo (PIX) - Estático
 * 21 - Crédito em Loja de Devolução
 * 22 - Pagamento Eletrônico não Informado - falha de hardware do sistema emissor
 * 90 - Sem pagamento
 * 99 - Outros
 */
    FormaPagamento?: string;
    VlPago?: number;
    VlTroco?: number;
/**
 * Pagamento integrado com automação?
 */
    TipoIntegracao?: boolean;
    CNPJCredenciadora?: string;
/**
 * 01 - Visa
 * 02 - Mastercard
 * 03 - American Express
 * 04 - Sorocred
 * 05 - Diners Club
 * 06 - Elo
 * 07 - Hipercard
 * 08 - Aura
 * 09 - Cabal
 * 99 - Outros
 */
    BandeiraOperadora?: string;
    NumeroAutorizacao?: string;
}

export interface Cobranca {
    Fatura?: Fatura;
    Parcelas?: Parcela[];
}

export interface Fatura {
    Numero?: string;
    Valor?: number;
    Desconto?: number;
    ValorLiquido?: number;
}

export interface Parcela {
    Vencimento?: string;
    Valor?: number;
}

export interface Transporte {
/**
 * 0 - Contratação do Frete por conta do Remetente (CIF)
 * 1 - Contratação do Frete por conta do Destinatário (FOB)
 * 2 - Contratação do Frete por conta de Terceiros
 * 3 - Transporte Próprio por conta do Remetente
 * 4 - Transporte Próprio por conta do Destinatário
 * 9 - Sem Ocorrência de Transporte
 */
    ModalidadeFrete?: number;
    NmTransportador?: string;
    CNPJ?: string;
    NmMunicipio?: string;
    DsEndereco?: string;
    IE?: string;
    UF?: string;
    Vagao?: string;
    Balsa?: string;
    Veiculo?: Veiculo;
    Reboque?: Reboque[];
    Volumes?: Volume[];
}

export interface Veiculo {
    Placa?: string;
    UF?: string;
    RNTC?: string;
}

export interface Volume {
    Numero?: string;
    QuantidadeVolume?: number;
    Especie?: string;
    Marca?: string;
    PesoBruto?: number;
    PesoLiquido?: number;
    Lacres?: string[];
}

export interface Reboque {
    Placa?: string;
    UF?: string;
    RNTC?: string;
}

export interface Combustivel {
    CodProdutoANP?: string;
    DescricaoProdutoANP?: string;
    UFConsumo?: string;
}

export interface Exporta {
/**
 * Descrição do local de despacho
 */
    LocalDespacho?: string;
/**
 * Sigla da UF de Embarque ou de transposição de fronteira
 */
    UFSaidaPais?: string;
/**
 * Descrição do Local de Embarque ou de transposição de fronteira
 */
    LocalEmbarqueTransp?: string;
}

export interface DeclaracaoImportacao {
/**
 * Número do Documento de Importação (DI, DSI, DIRE, ...)
 */
    Numero?: string;
/**
 * Data de Registro do documento de importação
 */
    DataRegistro?: string;
/**
 * Local de Desembaraço Aduaneiro
 */
    LocalDesenbaraco?: string;
/**
 * Sigla da UF onde ocorreu o Desembaraço Aduaneiro
 */
    UfDesenbaraco?: string;
/**
 * Data do Desembaraço Aduaneiro
 */
    DataDesenbaraco?: string;
/**
 * Via de transporte internacional informada na Declaração de Importação (DI)
 * 1 - Marítima
 * 2 - Fluvial
 * 3 - Lacustre
 * 4 - Aérea
 * 5 - Postal
 * 6 - Ferroviária
 * 7 - Rodoviária
 * 8 - Conduto / Rede Transmissão
 * 9 - Meios Próprios
 * 10 - Entrada / Saída ficta
 * 11 - Courier
 * 12 - Handcarry
 */
    TipoViaTransporte?: number;
/**
 * Valor da AFRMM - Adicional ao Frete para Renovação da Marinha Mercante
 */
    ValorAFRMM?: number;
/**
 * Forma de importação quanto a intermediação
 * 1 - Importação por conta própria
 * 2 - Importação por conta e ordem
 * 3 - Importação por encomenda
 */
    TipoIntermedio?: number;
/**
 * CNPJ do adquirente ou do encomendante
 */
    Cnpj?: string;
/**
 * Sigla da UF do adquirente ou do encomendante
 */
    Uf?: string;
/**
 * Código do Exportador
 */
    CodExportador?: string;
/**
 * Código do Fabricante Extrangeiro
 */
    CodFabricante?: string;
}

export interface Intermediador {
/**
 * CNPJ do intermediador da transação (marketplace/plataforma de terceiros). Obrigatório.
 */
    Cnpj?: string;
/**
 * Identificação do vendedor no site do intermediador (usuário/login cadastrado). Obrigatório.
 */
    IdCadIntTran?: string;
}

export interface NotaFiscalEnvio {
/**
 * Série da nota Fiscal
 */
    Serie?: number;
/**
 * Número da nota fiscal
 */
    Numero?: number;
/**
 * Lote da Nota Fiscal
 */
    Lote?: number;
/**
 * Data e Hora da saída ou de entrada da produto/serviço
 */
    DataEntradaSaida?: string;
/**
 * Data e Hora da saída ou de entrada da produto/serviço (Envia a data atual caso não informada)
 */
    DataEmissao?: string;
/**
 * B03 - Código numérico que compõe a Chave de Acesso. Número aleatório gerado pelo emitente para cada NF-e.
 */
    Codigo?: string;
/**
 * Utilizar quando o tipo de emissão for diferente normal
 */
    Justificativa?: string;
/**
 * Notas fiscal de Referência
 */
    NFReferencia?: string[];
/**
 * Indicador de presença do comprador no estabelecimento comercial no momento da operação
 * 0 - Não se aplica
 * 1 - Operação presencial;
 * 2 - Operação não presencial, pela Internet;
 * 3 - Operação não presencial, Teleatendimento;
 * 4 - NFC-e em operação com entrega a domicílio;
 * 5 - Presencial fora do estabelecimento;
 * 9 - Operação não presencial, outros.
 */
    IndicadorPresenca?: number;
/**
 * Dados do intermediador/marketplace (site ou plataforma de terceiros).
 * Ausente = operação sem intermediador (indIntermed = 0, grupo omitido).
 * Preenchido = operação em site/plataforma de terceiros (indIntermed = 1). Exige Cnpj e IdCadIntTran.
 * Só é válido quando IndicadorPresenca for 2, 3, 4 ou 9.
 */
    Intermediador?: Intermediador;
/**
 * Indica operação com Consumidor final (NFCe de ser 1 Validar!)
 * Falso - Normal;
 * Verdadeiro - Consumidor final;
 */
    ConsumidorFinal?: boolean;
/**
 * Indica operação com Consumidor final (NFCe de ser 1 Validar!)
 * Falso - Normal;
 * Verdadeiro - Consumidor final;
 */
    CalcularIBPT?: boolean;
/**
 * Descrição da Natureza da Operação
 */
    NaturezaOperacao?: string;
/**
 * Código do modelo do Documento Fiscal (Padrão 55)
 * 55 - NF-e
 * 65 - NFC-e
 */
    ModeloDocumento?: number;
/**
 * Finalidade da emissão da NF-e
 * 1 - Normal
 * 2 - Complementar
 * 3 - Ajuste
 * 4 - Devolução
 * 5 - Nota de crédito
 * 6 - Nota de débito
 */
    Finalidade?: number;
/**
 * Tipo de Nota de Débito. Obrigatório quando Finalidade = 6. Código SEFAZ:
 * 1 - Transferência de créditos para Cooperativas
 * 2 - Anulação de Crédito por Saídas Imunes/Isentas
 * 3 - Débitos de notas fiscais não processadas na apuração
 * 4 - Multa e juros
 * 5 - Transferência de crédito de sucessão
 * 6 - Pagamento antecipado
 * 7 - Perda em estoque
 */
    TpNFDebito?: number;
/**
 * Tipo de Nota de Crédito. Obrigatório quando Finalidade = 5. Código SEFAZ:
 * 1 - Multa e juros
 * 2 - Apropriação de crédito presumido de IBS sobre saldo devedor na ZFM
 * 3 - Retorno
 */
    TpNFCredito?: number;
/**
 * Identificação do Ambiente
 * 1 - Produção
 * 2 - Homologação
 */
    TipoAmbiente?: number;
    Observacao?: string;
    ObservacaoFisco?: string;
    IdentificadorInterno?: string;
    EnviarEmail?: boolean;
    Cliente?: Cliente;
    Produtos?: Produto[];
    Pagamentos?: Pagamento[];
    Cobranca?: Cobranca;
    Transporte?: Transporte;
    Exporta?: Exporta;
    Entrega?: Entrega;
/**
 * Retenções federais totais da nota (IRRF, PIS/COFINS/CSLL retidos, Previdência). Gera a tag retTrib no XML.
 */
    Retencoes?: RetencoesFederais;
}

export interface RetencoesFederais {
/**
 * Base de cálculo do IRRF
 */
    BaseCalculoIRRF?: number;
/**
 * Valor retido do IRRF
 */
    ValorIRRF?: number;
/**
 * Valor retido de PIS
 */
    ValorRetidoPIS?: number;
/**
 * Valor retido de COFINS
 */
    ValorRetidoCOFINS?: number;
/**
 * Valor retido de CSLL
 */
    ValorRetidoCSLL?: number;
/**
 * Base de cálculo da retenção da Previdência Social
 */
    BaseCalculoRetencaoPrevidencia?: number;
/**
 * Valor da retenção da Previdência Social
 */
    ValorRetencaoPrevidencia?: number;
}

export interface NotaFiscalLoteEnvio {
/**
 * Identificação do Ambiente
 * 1 - Produção
 * 2 - Homologação
 */
    TipoAmbiente?: number;
/**
 * Código do modelo do Documento Fiscal (Padrão 55)
 * 55 - NF-e
 * 65 - NFC-e
 */
    ModeloDocumento?: number;
/**
 * Lote da Nota Fiscal
 */
    Lote?: number;
    nFInfos?: NotaFiscalEnvio[];
}

