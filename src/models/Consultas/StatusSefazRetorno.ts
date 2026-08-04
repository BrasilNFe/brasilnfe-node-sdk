import { NewError } from '../Outros/Erros';

export interface StatusSefazRetorno extends NewError {
    Versao?: string;
    CodTipoAmbiente?: number;
    DsTipoAmbiente?: string;
    CodStatusRespostaSefaz?: number;
    DsStatusRespostaSefaz?: string;
    CodEstadoEmitente?: number;
    DsEstadoEmitente?: string;
}
