import { BrasilNFeRequest } from '../brasilnferequest';
import { StatusSefazEnvio, Produto, PreVisualizarNotaFiscalEnvio, BuscarNotaFiscalServicoEnvio, BuscarNotaFiscalEnvio, ConsultarCadastroEnvio } from '../models';

type StatusSefazRetorno = any;
type CalculoImpostosRetorno = any;
type PreVisualizarNotaFiscalRetorno = any;
type NotaFiscalServicoRetorno = any;
type BuscarNotaFiscalRetorno = any;
type ConsultarCadastroRetorno = any;
type SpedRetorno = any;

export class Consultas extends BrasilNFeRequest {
    constructor(token: string, url: string) { super(token, url); }

    public async statusSefaz(envio: StatusSefazEnvio): Promise<StatusSefazRetorno> {
        return this.request<StatusSefazRetorno, StatusSefazEnvio>(envio, "StatusSefaz");
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
    public async buscarNotaFiscal(envio: BuscarNotaFiscalEnvio): Promise<BuscarNotaFiscalRetorno> {
        return this.request<BuscarNotaFiscalRetorno, BuscarNotaFiscalEnvio>(envio, "BuscarNotaFiscal");
    }
    public async consultarCadastroSefaz(envio: ConsultarCadastroEnvio): Promise<ConsultarCadastroRetorno> {
        return this.request<ConsultarCadastroRetorno, ConsultarCadastroEnvio>(envio, "ConsultarCadastroSefaz");
    }
    public async buscarArquivoSped(codigo: string): Promise<SpedRetorno> {
        return this.request<SpedRetorno, string>(codigo, `BuscarArquivoSped/?codigo=${codigo}`);
    }
}