import { BrasilNFeRequest } from '../brasilnferequest';
import {
    NotaFiscalEnvio, NotaFiscalLoteEnvio, NotaFiscalServicoEnvio, ManifestoTransporteEnvio,
    NFEnerComEnvio, NotaFiscalComplementarEnvio, CTeEnvio, DCeEnvio,
    NotaFiscalRetorno, NotaFiscalServicoRetorno, ManifestoTransporteRetorno,
    NFEnerComRetorno, CTeRetorno, DCeRetorno
} from '../models';

export class NotaFiscal extends BrasilNFeRequest {

    constructor(token: string, url: string) {
        super(token, url);
    }

    public async enviarNotaFiscal(notaFiscal: NotaFiscalEnvio, crt?: number): Promise<NotaFiscalRetorno> {
        return this.request<NotaFiscalRetorno, NotaFiscalEnvio>(notaFiscal, "EnviarNotaFiscal");
    }

    public async enviarNotaFiscalLote(notaFiscalLote: NotaFiscalLoteEnvio, crt?: number): Promise<NotaFiscalRetorno> {
        return this.request<NotaFiscalRetorno, NotaFiscalLoteEnvio>(notaFiscalLote, "EnviarNotaFiscalLote");
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

    public async enviarConhecimentoTransporte(cteEnvio: CTeEnvio): Promise<CTeRetorno> {
        return this.request<CTeRetorno, CTeEnvio>(cteEnvio, "EnviarConhecimentoTransporte");
    }

    public async enviarDeclaracaoConteudo(dceEnvio: DCeEnvio): Promise<DCeRetorno> {
        return this.request<DCeRetorno, DCeEnvio>(dceEnvio, "EnviarDeclaracaoConteudo");
    }
}
