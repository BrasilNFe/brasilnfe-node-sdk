import { BrasilNFeRequest } from '../brasilnferequest';
import { 
    SintegraEnvio, FciEnvio, ArqEnerComEnvio, SpedEnvio, 
    UnificarSpedEnvio, PegarArquivoEnvio, PegarArquivoEventoEnvio, ObterArquivosRangeEnvio 
} from '../models';

// Tipos de retorno placeholders
type SintegraRetorno = any;
type FciRetorno = any;
type ArqEnerComRetorno = any;
type SpedRetorno = any;
type ObterArquivosRangeRetorno = any;

export class Arquivos extends BrasilNFeRequest {

    constructor(token: string, url: string) {
        super(token, url);
    }

    public async obterArquivoSintegra(sintegraEnvio: SintegraEnvio): Promise<SintegraRetorno> {
        return this.request<SintegraRetorno, SintegraEnvio>(sintegraEnvio, "ObterArquivoSintegra");
    }

    public async obterArquivoFci(fciEnvio: FciEnvio): Promise<FciRetorno> {
        return this.request<FciRetorno, FciEnvio>(fciEnvio, "ObterArquivoFci");
    }

    public async obterArqEnerCom(arqEnerComEnvio: ArqEnerComEnvio): Promise<ArqEnerComRetorno> {
        return this.request<ArqEnerComRetorno, ArqEnerComEnvio>(arqEnerComEnvio, "ObterArquivoNFEnerCom");
    }

    public async obterArquivoSped(spedEnvio: SpedEnvio): Promise<SpedRetorno> {
        return this.request<SpedRetorno, SpedEnvio>(spedEnvio, "ObterArquivoSped");
    }

    public async obterArquivoSpedUnificado(unificarSpedEnvio: UnificarSpedEnvio): Promise<SpedRetorno> {
        return this.request<SpedRetorno, UnificarSpedEnvio>(unificarSpedEnvio, "ObterArquivoSpedUnificado");
    }

    public async recriarArquivoSped(codigo: string): Promise<SpedRetorno> {
        return this.request<SpedRetorno, string>(codigo, `RecriarArquivoSped/?codigo=${codigo}`);
    }

    public async pegarArquivo(pegarArquivoEnvio: PegarArquivoEnvio): Promise<Buffer> {
        const base64String = await this.request<string, PegarArquivoEnvio>(pegarArquivoEnvio, "GetFile");
        return Buffer.from(base64String, 'base64');
    }

    public async pegarArquivoEvento(pegarArquivoEventoEnvio: PegarArquivoEventoEnvio): Promise<Buffer> {
        const base64String = await this.request<string, PegarArquivoEventoEnvio>(pegarArquivoEventoEnvio, "GetFileFromEvent");
        return Buffer.from(base64String, 'base64');
    }

    public async obterArquivosPorRange(pegarArquivosRangeEnvio: ObterArquivosRangeEnvio): Promise<ObterArquivosRangeRetorno> {
        return this.request<ObterArquivosRangeRetorno, ObterArquivosRangeEnvio>(pegarArquivosRangeEnvio, "ObterArquivosPorRange");
    }
}