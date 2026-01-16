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
import { BrasilNFe, NotaFiscalEnvio } from 'brasilnfe';

const bnfe = new BrasilNFe('SEU_TOKEN_AQUI');

const payloadNFe: NotaFiscalEnvio = {
    TipoAmbiente: 2, // 1 - Produção, 2 - Homologação
    ModeloDocumento: 55,
    NaturezaOperacao: 'VENDA DE MERCADORIA',
    Finalidade: 1, // Normal
    ConsumidorFinal: true,
    Cliente: {
        CpfCnpj: '00000000000191',
        NmCliente: 'CLIENTE TESTE SDK',
        Endereco: {
            Logradouro: 'Av. Paulista',
            Numero: '1000',
            Bairro: 'Bela Vista',
            CodMunicipio: '3550308',
            Municipio: 'São Paulo',
            Uf: 'SP',
            Cep: '01310100'
        }
    },
    Produtos: [
        {
            CodProdutoServico: 'PROD123',
            NmProduto: 'CONSULTORIA DE SOFTWARE',
            NCM: '99999999',
            CFOP: 5102,
            UnidadeComercial: 'UN',
            Quantidade: 1,
            ValorUnitario: 100.00,
            ValorTotal: 100.00,
            Imposto: {
                ICMS: {
                    CodSituacaoTributaria: '102',
                    AliquotaICMS: 0
                },
                PIS: {
                    CodSituacaoTributaria: '99',
                    Aliquota: 0
                },
                COFINS: {
                    CodSituacaoTributaria: '99',
                    Aliquota: 0
                }
            }
        }
    ]
};

async function emitirNota() {
    try {
        const resposta = await bnfe.notaFiscal.enviarNotaFiscal(payloadNFe);
        
        if (resposta.ReturnNF?.Ok) {
            console.log('✅ Sucesso! Chave:', resposta.ReturnNF.ChaveNF);
            console.log('XML Base64:', resposta.Base64Xml);
        } else {
            console.error('⚠️ Nota rejeitada:', resposta.erros);
        }
    } catch (error: any) {
        console.error('❌ Erro na requisição:', error.message);
    }
}

emitirNota();
```

---

## ❌ Exemplo 2: Cancelamento de Nota

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

## 🔎 Exemplo 3: Consultando Status da Sefaz

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
