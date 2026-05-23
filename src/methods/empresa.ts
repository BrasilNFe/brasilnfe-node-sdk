import { BrasilNFeRequest } from '../brasilnferequest';
import {
    CertificadoEnvio,
    EmpresaEnvio,
    CertificadoRetorno,
    EmpresaRetorno,
    Numeracao,
    ConsultarNumeracaoRetorno,
    AtualizarNumeracaoRetorno,
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
}