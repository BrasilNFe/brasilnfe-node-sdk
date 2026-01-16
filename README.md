# Brasil NFe Node.js SDK

[![npm version](https://img.shields.io/npm/v/brasilnfe.svg?style=flat-square)](https://www.npmjs.com/package/brasilnfe)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg?style=flat-square)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)

Biblioteca oficial e robusta para integração com a API da **[Brasil NFe](https://www.brasilnfe.com.br)**. Desenvolvida em TypeScript, esta SDK facilita a emissão, consulta e gerenciamento de documentos fiscais eletrônicos (NF-e, NFC-e, CT-e, MDF-e, NFS-e) e geração de arquivos fiscais (SPED, Sintegra) diretamente em suas aplicações Node.js.

---

## 🚀 Sobre a Brasil NFe

A **Brasil NFe** oferece soluções completas de API para emissão de notas fiscais e documentos eletrônicos, atendendo desenvolvedores e empresas que buscam estabilidade, performance e conformidade com a legislação brasileira.

- **Site Oficial:** https://www.brasilnfe.com.br  
- **Documentação da API:** https://www.brasilnfe.com.br/docs  

---

## 🛠️ Recursos Principais

O SDK cobre integralmente os métodos disponíveis na API REST, organizados de forma orientada a objetos:

- **Emissão de Documentos:**  
  NF-e (55), NFC-e (65), CT-e (57), MDF-e (58) e NFS-e.
- **Eventos:**  
  Cancelamento, Carta de Correção (CC-e), Inutilização de Numeração, Manifestação do Destinatário.
- **Consultas:**  
  Status da Sefaz, Consulta de Cadastro, Busca de Notas, Cálculo de Impostos.
- **Arquivos Fiscais:**  
  Geração e download de SPED Fiscal/Contribuições e Sintegra.
- **Gestão:**  
  Administração de empresas e certificados digitais via API.

---

## 📦 Instalação

```bash
npm install brasilnfe
# ou
yarn add brasilnfe
```

## 💻 Como Usar

A biblioteca exporta a classe principal `BrasilNFe`. Você precisará apenas do seu **Token de acesso** (disponível no painel da Brasil NFe).

### Configuração Inicial (TypeScript)

```ts
import { BrasilNFe } from 'brasilnfe';

// Substitua pelo seu token de produção ou homologação
const TOKEN_API = 'SEU_TOKEN_AQUI';

// Opcional: UserToken para métodos específicos de gestão de empresas
const USER_TOKEN = 'SEU_USER_TOKEN_AQUI'; 

const bnfe = new BrasilNFe(TOKEN_API, USER_TOKEN);
```

---

## 📄 Exemplo 1: Emitindo uma NF-e

Exemplo de envio de uma Nota Fiscal Eletrônica (Modelo 55) em ambiente de homologação.  
O SDK fornece tipagem completa para os objetos de envio (`NotaFiscalEnvio`).

```ts
import { BrasilNFe, NotaFiscalEnvio } from 'brasilnfe'; //

const bnfe = new BrasilNFe('SEU_TOKEN_DE_PRODUCAO_OU_HOMOLOGACAO');

// Exemplo de NF-e (Modelo 55) mais robusto
const payloadNFe: NotaFiscalEnvio = {
    // Cabeçalho
    TipoAmbiente: 2, // 1 - Produção, 2 - Homologação
    ModeloDocumento: 55, // 55 = NF-e
    Finalidade: 1, // 1 = Normal
    NaturezaOperacao: 'VENDA DE MERCADORIA',
    IndicadorPresenca: 1, // 1 = Operação presencial
    ConsumidorFinal: false, // Geralmente false para NF-e B2B (entre empresas)
    EnviarEmail: true, // Envia o XML e PDF para o email do cliente se disponível

    // Destinatário Completo
    Cliente: {
        CpfCnpj: '00000000000191',
        NmCliente: 'EMPRESA EXEMPLO LTDA',
        IndicadorIe: 1, // 1 = Contribuinte ICMS
        Ie: '123456789', // Inscrição Estadual obrigatória para contribuintes
        Email: 'financeiro@cliente.com.br',
        Endereco: {
            Logradouro: 'Av. Industrial',
            Numero: '500',
            Complemento: 'Galpão B',
            Bairro: 'Distrito Industrial',
            CodMunicipio: '3550308',
            Municipio: 'São Paulo',
            Uf: 'SP',
            Cep: '01000000'
        }
    },

    // Lista de Produtos
    Produtos: [
        {
            CodProdutoServico: 'COD-100',
            NmProduto: 'PARAFUSADEIRA ELETRICA 220V',
            NCM: '84672100', // Código NCM válido
            CEST: '2105300', // Código CEST se necessário
            CFOP: 5102, // Venda de mercadoria adquirida de terceiros
            UnidadeComercial: 'UN',
            Quantidade: 2,
            ValorUnitario: 150.00,
            ValorTotal: 300.00, // 2 * 150
            
            // Impostos (Exemplo Simples Nacional)
            Imposto: {
                ICMS: {
                    CodSituacaoTributaria: '102', // Tributada sem permissão de crédito (Simples Nacional)
                    OrigemProduto: 0, // 0 = Nacional
                    AliquotaICMS: 0
                },
                PIS: {
                    CodSituacaoTributaria: '99', // Outras operações
                    Aliquota: 0
                },
                COFINS: {
                    CodSituacaoTributaria: '99',
                    Aliquota: 0
                }
            }
        }
    ],

    // Informações de Pagamento (Obrigatório na NF-e 4.0)
    Pagamentos: [
        {
            IndicadorPagamento: 0, // 0 = À vista, 1 = A prazo
            FormaPagamento: '15', // 15 = Boleto Bancário
            VlPago: 300.00
        }
    ],

    // Informações de Transporte (Frete)
    Transporte: {
        ModalidadeFrete: 0, // 0 = Por conta do emitente (CIF)
        Volume: {
            QuantidadeVolume: 2,
            Especie: 'CAIXA',
            PesoBruto: 5.500,
            PesoLiquido: 5.000
        }
    }
};

async function emitirNFe() {
    try {
        console.log('Enviando NF-e...');
        //
        const resposta = await bnfe.notaFiscal.enviarNotaFiscal(payloadNFe);

        if (resposta.ReturnNF?.Ok) {
            console.log('✅ NF-e Autorizada!');
            console.log('Chave:', resposta.ReturnNF.ChaveNF);
            console.log('Protocolo:', resposta.ReturnNF.Numero);
            console.log('PDF (Base64):', resposta.Base64File ? 'Recebido' : 'Não gerado');
        } else {
            console.error('⚠️ Erro na emissão ou rejeição:');
            // Itera sobre os erros retornados pela API ou Sefaz
            resposta.erros?.forEach(erro => {
                console.error(`- [${erro.codigo}] ${erro.descricao} (Correção: ${erro.correcao})`);
            });
        }
    } catch (error: any) {
        console.error('❌ Erro de comunicação/exceção:', error.message);
    }
}

emitirNFe();
```

---

## 📄 Exemplo 2: Emitindo uma NFC-e

Exemplo de envio de uma NFC-e (Nota Fiscal de Consumidor - Modelo 65) em ambiente de homologação.  
O SDK fornece tipagem completa para os objetos de envio (`NotaFiscalEnvio`).

```ts
import { BrasilNFe, NotaFiscalEnvio } from 'brasilnfe'; //

const bnfe = new BrasilNFe('SEU_TOKEN_AQUI');

// Exemplo de NFC-e (Modelo 65)
const payloadNFCe: NotaFiscalEnvio = {
    TipoAmbiente: 2, // 2 = Homologação
    ModeloDocumento: 65, // 65 = NFC-e
    Finalidade: 1, // Normal
    NaturezaOperacao: 'VENDA AO CONSUMIDOR',
    IndicadorPresenca: 1, // 1 = Operação presencial
    ConsumidorFinal: true, // Obrigatório true para NFC-e
    
    // Na NFC-e, o cliente é opcional para valores baixos ou pode ter apenas CPF/Nome
    Cliente: {
        CpfCnpj: '12345678909', // CPF do consumidor (opcional em muitos casos)
        // Endereço não é obrigatório na NFC-e presencial
    },

    Produtos: [
        {
            CodProdutoServico: 'REFRIGERANTE-LATA',
            NmProduto: 'REFRIGERANTE LATA 350ML',
            NCM: '22021000',
            CFOP: 5102,
            UnidadeComercial: 'UN',
            Quantidade: 1,
            ValorUnitario: 5.00,
            ValorTotal: 5.00,
            Imposto: {
                ICMS: {
                    CodSituacaoTributaria: '102', // Simples Nacional
                    AliquotaICMS: 0
                },
                // PIS e COFINS muitas vezes são simplificados ou zerados dependendo do regime
                PIS: { CodSituacaoTributaria: '99', Aliquota: 0 },
                COFINS: { CodSituacaoTributaria: '99', Aliquota: 0 }
            }
        }
    ],

    // Pagamento via Cartão de Crédito (Exemplo)
    Pagamentos: [
        {
            IndicadorPagamento: 0, // À vista
            FormaPagamento: '03', // 03 = Cartão de Crédito (01=Dinheiro, 17=PIX)
            VlPago: 5.00,
            BandeiraOperadora: '01', // 01=Visa, 02=Mastercard (Necessário para TEF/Cartão)
            // Se integrado com maquininha (TEF), precisaria enviar CNPJCredenciadora e NumeroAutorizacao
        }
    ]
};

async function emitirNFCe() {
    try {
        console.log('Enviando NFC-e...');
        //
        const resposta = await bnfe.notaFiscal.enviarNotaFiscal(payloadNFCe);

        if (resposta.ReturnNF?.Ok) {
            console.log('✅ NFC-e Autorizada!');
            console.log('Link QRCode:', resposta.ReturnNF.UrlConsulta); // (Campo hipotético, verifique se a API retorna a URL no objeto completo ou no XML)
            console.log('Chave:', resposta.ReturnNF.ChaveNF);
        } else {
            console.error('⚠️ NFC-e Rejeitada:');
            resposta.erros?.forEach(erro => {
                console.error(`- ${erro.descricao}`);
            });
        }
    } catch (error: any) {
        console.error('❌ Erro:', error.message);
    }
}

emitirNFCe();
```

---

## ❌ Exemplo 3: Cancelamento de Nota

```ts
import { CancelarNotaFiscalEnvio } from 'brasilnfe';

const dadosCancelamento: CancelarNotaFiscalEnvio = {
    ChaveNF: '35230100000000000000550010000000011000000000',
    Justificativa: 'Erro de digitação no valor do produto',
    NumeroProtocolo: '135230000000000',
    TipoAmbienteNFSe: 2
};

bnfe.eventos.cancelarNotaFiscal(dadosCancelamento)
    .then(res => console.log('Status Cancelamento:', res.Status))
    .catch(err => console.error(err));
```

---

## 🔎 Exemplo 4: Consultando Status da Sefaz

```ts
const status = await bnfe.consultas.consultarStatusSefaz({
    TipoAmbiente: 2,
    ModeloDocumento: 55
});

console.log(`Status Sefaz SP: ${status.StatusSefaz?.DsStatusRespostaSefaz}`);
```

---

## 🧩 Estrutura do SDK

A instância `BrasilNFe` agrupa as funcionalidades em módulos lógicos:

| Módulo      | Acesso via Código | Funcionalidade |
|------------|------------------|----------------|
| Nota Fiscal | `bnfe.notaFiscal` | Envio de NF-e, NFC-e, CT-e, MDF-e, GNRE e NFS-e |
| Eventos | `bnfe.eventos` | Cancelamentos, CC-e, Inutilização, Manifestos |
| Consultas | `bnfe.consultas` | Status Sefaz, Consulta de Notas e Cadastros |
| Arquivos | `bnfe.arquivos` | DANFE, XMLs, SPED, Sintegra, FCI |
| Empresa | `bnfe.empresa` | Cadastro de empresas e certificados |

---

## 🔒 TypeScript

O pacote foi desenvolvido inteiramente em **TypeScript**, oferecendo:

- IntelliSense completo no VS Code  
- Validação de tipos em tempo de compilação  
- Redução de erros de integração  

Todos os modelos são exportados:

```ts
import { 
    NotaFiscalEnvio, 
    Cliente, 
    Produto, 
    SpedEnvio 
} from 'brasilnfe';
```

---

## ⚠️ Tratamento de Erros

- Todas as chamadas são assíncronas (`Promise`)
- Utilize sempre `try/catch`
- Erros de validação da Sefaz retornam no objeto de resposta
- Erros de conexão lançam exceções

---

## 📄 Licença

Este projeto está licenciado sob a **licença ISC**.

---

## 📞 Suporte

Para dúvidas comerciais ou suporte técnico:

- **Web:** www.brasilnfe.com.br  
- **Email:** contato@brasilnfe.com.br
- **Telefone:** 
<a href="https://wa.me/5531971685947" target="_blank">
  <img
    src="https://img.shields.io/badge/WhatsApp-+55%20(31)%209%207168--5947-25D366?logo=whatsapp&logoColor=white"
    style="vertical-align: middle; margin-left: 6px;"
  />
</a>


</a>


<div align="center">
  <sub>Desenvolvido por BRASIL NFE LTDA - 39.658.743/0001-99</sub>
</div>
