import { BrasilNFeRequest } from '../brasilnferequest';
import {
    CertificadoEnvio,
    EmpresaEnvio,
    CertificadoRetorno,
    EmpresaRetorno,
    Numeracao,
    ConsultarNumeracaoRetorno,
    AtualizarNumeracaoRetorno,
    AtivarAssinaturaEnvio,
    AtivarAssinaturaRetorno,
    CancelarAssinaturaEnvio,
    CancelarAssinaturaRetorno,
    ConsultarServicosRetorno,
    ConsultarFaturasRetorno,
} from '../models';

export class Empresa extends BrasilNFeRequest {
    constructor(token: string, url: string, userToken: string) { super(token, url, userToken); }

    public async alterarCertificado(certificado: CertificadoEnvio): Promise<CertificadoRetorno> {
        return this.request<CertificadoRetorno, CertificadoEnvio>(certificado, "AlterarCertificado");
    }
    public async verificarCertificado(certificado: CertificadoEnvio): Promise<CertificadoRetorno> {
        return this.request<CertificadoRetorno, CertificadoEnvio>(certificado, "VerifyCertificate");
    }
    public async adicionarEmpresa(empresa: EmpresaEnvio): Promise<EmpresaRetorno> {
        return this.request<EmpresaRetorno, EmpresaEnvio>(empresa, "AdicionarEmpresa");
    }
    public async editarEmpresa(empresa: EmpresaEnvio): Promise<EmpresaRetorno> {
        return this.request<EmpresaRetorno, EmpresaEnvio>(empresa, "EditarEmpresa");
    }
    public async buscarEmpresa(): Promise<EmpresaEnvio> {
        return this.request<EmpresaEnvio, string>("", "BuscarEmpresa");
    }
    public async buscarTodasEmpresas(): Promise<EmpresaEnvio[]> {
        return this.request<EmpresaEnvio[], string>("", "BuscarTodasEmpresas");
    }
    public async deletarEmpresa(): Promise<EmpresaRetorno> {
        return this.request<EmpresaRetorno, string>("", "DeletarEmpresa");
    }
    public async gerarLinkAtivacao(): Promise<string> {
        return this.request<string, string>("", "GerarLinkAtivacao");
    }
    public async consultarNumeracao(): Promise<ConsultarNumeracaoRetorno> {
        return this.request<ConsultarNumeracaoRetorno, string>("", "ConsultarNumeracao");
    }
    public async atualizarNumeracao(numeracao: Numeracao): Promise<AtualizarNumeracaoRetorno> {
        return this.request<AtualizarNumeracaoRetorno, Numeracao>(numeracao, "AtualizarNumeracao");
    }

    /**
     * Ativa a assinatura da empresa diretamente, sem passar pelo checkout web:
     * cria a cobrança e retorna PIX copia-e-cola / QR Code / boleto prontos.
     * Os serviços são ativados automaticamente após a confirmação do pagamento.
     * Chamadas repetidas com os mesmos serviços reaproveitam a cobrança pendente.
     */
    public async ativarAssinatura(envio?: AtivarAssinaturaEnvio): Promise<AtivarAssinaturaRetorno> {
        return this.request<AtivarAssinaturaRetorno, AtivarAssinaturaEnvio>(envio ?? {}, "AtivarAssinatura");
    }

    /**
     * Cancela a assinatura dos serviços informados: cancela as assinaturas
     * em andamento da empresa no gateway de cobrança e desativa os serviços.
     * Cobranças pendentes dessas assinaturas são canceladas junto.
     */
    public async cancelarAssinatura(envio: CancelarAssinaturaEnvio): Promise<CancelarAssinaturaRetorno> {
        return this.request<CancelarAssinaturaRetorno, CancelarAssinaturaEnvio>(envio, "CancelarAssinatura");
    }

    /**
     * Consulta os serviços disponíveis para contratação e a situação
     * (ativo ou não) de cada um na empresa. Os nomes retornados são os
     * aceitos no campo Servicos de ativarAssinatura.
     */
    public async consultarServicos(): Promise<ConsultarServicosRetorno> {
        return this.request<ConsultarServicosRetorno, string>("", "ConsultarServicos");
    }

    /**
     * Consulta as faturas de assinatura da empresa (pendentes e pagas),
     * da mais recente para a mais antiga.
     */
    public async consultarFaturas(): Promise<ConsultarFaturasRetorno> {
        return this.request<ConsultarFaturasRetorno, string>("", "ConsultarFaturas");
    }
}