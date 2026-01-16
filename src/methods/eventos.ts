import { BrasilNFeRequest } from '../brasilnferequest';
import {
    CancelarNotaFiscalEnvio, CartaCorrecaoEnvio, InutilizarNumeracaoEnvio,
    ManifestarNotaFiscalEnvio, EncerrarManifestoTransporteEnvio, EventoNotaFiscalRetorno
} from '../models';

export class Eventos extends BrasilNFeRequest {
    constructor(token: string, url: string) { super(token, url); }

    public async cancelarNotaFiscal(envio: CancelarNotaFiscalEnvio): Promise<EventoNotaFiscalRetorno> {
        return this.request<EventoNotaFiscalRetorno, CancelarNotaFiscalEnvio>(envio, "CancelNF");
    }
    public async enviarCartaCorrecao(envio: CartaCorrecaoEnvio): Promise<EventoNotaFiscalRetorno> {
        return this.request<EventoNotaFiscalRetorno, CartaCorrecaoEnvio>(envio, "EnviarCartaCorrecao");
    }
    public async inutilizarNumeracao(envio: InutilizarNumeracaoEnvio): Promise<EventoNotaFiscalRetorno> {
        return this.request<EventoNotaFiscalRetorno, InutilizarNumeracaoEnvio>(envio, "InutilizarNumeracao");
    }
    public async manifestarNotaFiscal(envio: ManifestarNotaFiscalEnvio): Promise<EventoNotaFiscalRetorno> {
        return this.request<EventoNotaFiscalRetorno, ManifestarNotaFiscalEnvio>(envio, "ManifestarNotaFiscal");
    }
    public async encerrarManifestoTransporte(envio: EncerrarManifestoTransporteEnvio): Promise<EventoNotaFiscalRetorno> {
        return this.request<EventoNotaFiscalRetorno, EncerrarManifestoTransporteEnvio>(envio, "EncerrarManifestoTransporte");
    }
}