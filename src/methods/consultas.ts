import { BrasilNFeRequest } from '../brasilnferequest';
import {
    StatusSefazEnvio, Produto, PreVisualizarNotaFiscalEnvio, BuscarNotaFiscalServicoEnvio,
    BuscarNotaFiscalEnvio, ConsultarCadastroEnvio, ConsultarLoteNFeEnvio,
    StatusSefazRetorno, CalculoImpostosRetorno, PreVisualizarNotaFiscalRetorno,
    NotaFiscalServicoRetorno, BuscarNotaFiscalRetorno, ConsultarCadastroRetorno,
    NotaFiscalLoteRetorno, SpedRetorno
} from '../models';

export class Consultas extends BrasilNFeRequest {
    constructor(token: string, url: string) { super(token, url); }

    public async consultarStatusSefaz(envio: StatusSefazEnvio): Promise<StatusSefazRetorno> {
        return this.request<StatusSefazRetorno, StatusSefazEnvio>(envio, "ConsultarStatusSefaz");
    }

    public async calcularImpostos(produtos: Produto[]): Promise<CalculoImpostosRetorno> {
        return this.request<CalculoImpostosRetorno, Produto[]>(produtos, "CalcularImpostos");
    }

    public async preVisualizarNotaFiscal(envio: PreVisualizarNotaFiscalEnvio): Promise<PreVisualizarNotaFiscalRetorno> {
        return this.request<PreVisualizarNotaFiscalRetorno, PreVisualizarNotaFiscalEnvio>(envio, "PreVisualizarNotaFiscal");
    }

    public async buscarNotaFiscalServico(envio: BuscarNotaFiscalServicoEnvio): Promise<NotaFiscalServicoRetorno> {
        return this.request<NotaFiscalServicoRetorno, BuscarNotaFiscalServicoEnvio>(envio, "BuscarNotaFiscalServico");
    }

    public async obterNotasFiscais(envio: BuscarNotaFiscalEnvio): Promise<BuscarNotaFiscalRetorno> {
        return this.request<BuscarNotaFiscalRetorno, BuscarNotaFiscalEnvio>(envio, "ObterNotasFiscais");
    }

    public async consultarCadastroSefaz(envio: ConsultarCadastroEnvio): Promise<ConsultarCadastroRetorno> {
        return this.request<ConsultarCadastroRetorno, ConsultarCadastroEnvio>(envio, "ConsultarCadastroSefaz");
    }

    public async buscarArquivoSped(codigo: string): Promise<SpedRetorno> {
        return this.request<SpedRetorno, string>(codigo, `BuscarArquivoSped/?codigo=${codigo}`);
    }

    public async consultarLoteNFe(envio: ConsultarLoteNFeEnvio): Promise<NotaFiscalLoteRetorno> {
        return this.request<NotaFiscalLoteRetorno, ConsultarLoteNFeEnvio>(envio, "ConsultarLoteNFe");
    }
}
