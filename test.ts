import { BrasilNFe } from './src';
import { NotaFiscalEnvio } from './src/models';

const TOKEN = '';

async function runTest() {
    console.log('🚀 Iniciando teste de integração BrasilNFe SDK...');

    console.log('1. Instanciando BrasilNFe...');

    try {
        const bnfe = new BrasilNFe(TOKEN);
        console.log('   ✅ Classe instanciada com sucesso.');

        console.log('2. Testando construção de objeto NotaFiscalEnvio (Tipagem)...');

        const notaTeste: NotaFiscalEnvio = {
            TipoAmbiente: 2, // Homologação
            ModeloDocumento: 55, // NFe
            NaturezaOperacao: 'VENDA DE MERCADORIA',
            Finalidade: 1,
            ConsumidorFinal: true,
            Cliente: {
                CpfCnpj: '00000000000191',
                NmCliente: 'CLIENTE TESTE SDK',
                Endereco: {
                    Logradouro: 'Rua Teste',
                    Numero: '100',
                    Bairro: 'Centro',
                    CodMunicipio: '3550308',
                    Municipio: 'São Paulo',
                    Uf: 'SP',
                    Cep: '01001000'
                }
            },
            Pagamentos: [
                {
                    FormaPagamento: '01',
                    VlPago: 5
                }
            ],
            Produtos: [
                {
                    CodProdutoServico: 'PROD001',
                    NmProduto: 'PRODUTO TESTE',
                    NCM: '99999999',
                    CFOP: 5102,
                    UnidadeComercial: 'UND',
                    ValorUnitario: 5.00,
                    Quantidade: 1,
                    ValorTotal: 5.00,
                    Imposto: {
                        ICMS: {
                            CodSituacaoTributaria: '102',
                            AliquotaICMS: 0
                        },
                        PIS: {
                            CodSituacaoTributaria: '99',
                            Aliquota: 0,
                        },
                        IPI: {
                            CodSituacaoTributaria: '99',
                            CodEnquadramento: '999',
                        },
                        COFINS: {
                            CodSituacaoTributaria: '99',
                            Aliquota: 0,
                        }
                    }
                }
            ]
        };

        const resposta = await bnfe.notaFiscal.enviarNotaFiscal(notaTeste);

        console.log(resposta)

    } catch (error: any) {
        console.error('   ❌ ERRO NO TESTE:');
        console.error(error.message);
        if (error.response) {
            console.error('Dados do erro:', error.response.data);
        }
    }
}

runTest();