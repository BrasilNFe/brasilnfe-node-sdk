import { BrasilNFeRequest } from '../brasilnferequest';
import { 
    NotaFiscalEnvio, NotaFiscalServicoEnvio, ManifestoTransporteEnvio, 
    NFEnerComEnvio, NotaFiscalComplementarEnvio 
} from '../models';

type NotaFiscalRetorno = any;
type NotaFiscalServicoRetorno = any;
type ManifestoTransporteRetorno = any;
type NFEnerComRetorno = any;

export class NotaFiscal extends BrasilNFeRequest {

    constructor(token: string, url: string) {
        super(token, url);
    }

    public async enviarNotaFiscal(notaFiscal: NotaFiscalEnvio, crt?: number): Promise<NotaFiscalRetorno> {
        return this.request<NotaFiscalRetorno, NotaFiscalEnvio>(notaFiscal, "EnviarNotaFiscal");
    }

    public async enviarNotaFiscalServico(notaFiscal: NotaFiscalServicoEnvio): Promise<NotaFiscalServicoRetorno> {
        return this.request<NotaFiscalServicoRetorno, NotaFiscalServicoEnvio>(notaFiscal, "EnviarNotaFiscalServico");
    }

    public async enviarManifestoTransporte(manifestoTransporte: ManifestoTransporteEnvio): Promise<ManifestoTransporteRetorno> {
        return this.request<ManifestoTransporteRetorno, ManifestoTransporteEnvio>(manifestoTransporte, "EnviarManifestoTransporte");
    }

    public async enviarNFEnerCom(nFEnerComEnvio: NFEnerComEnvio): Promise<NFEnerComRetorno> {
        return this.request<NFEnerComRetorno, NFEnerComEnvio>(nFEnerComEnvio, "EnviarNFEnerCom");
    }

    public async enviarNotaFiscalComplementar(notaFiscal: NotaFiscalComplementarEnvio): Promise<NotaFiscalRetorno> {
        return this.request<NotaFiscalRetorno, NotaFiscalComplementarEnvio>(notaFiscal, "EnviarNotaFiscalComplementar");
    }
}