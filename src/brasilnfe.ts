import { NotaFiscal } from './methods/notafiscal';
import { Eventos } from './methods/eventos';
import { Consultas } from './methods/consultas';
import { Empresa } from './methods/empresa';
import { Arquivos } from './methods/arquivos';

export class BrasilNFe {
    private _notaFiscal: NotaFiscal;
    private _eventos: Eventos;
    private _consultas: Consultas;
    private _empresa: Empresa | null = null;
    private _arquivos: Arquivos;

    constructor(token: string, userToken: string = "", url: string = "https://api.brasilnfe.com.br/services/") {
        const fiscalUrl = url + "Fiscal/";
        const empresaUrl = url + "Empresa/";

        this._notaFiscal = new NotaFiscal(token, fiscalUrl);
        this._eventos = new Eventos(token, fiscalUrl);
        this._consultas = new Consultas(token, fiscalUrl);
        this._arquivos = new Arquivos(token, fiscalUrl);

        if (userToken) {
            this._empresa = new Empresa(token, empresaUrl, userToken);
        }
    }

    public get notaFiscal(): NotaFiscal { return this._notaFiscal; }
    public get eventos(): Eventos { return this._eventos; }
    public get consultas(): Consultas { return this._consultas; }
    
    public get empresa(): Empresa { 
        if (!this._empresa) throw new Error("UserToken não fornecido na inicialização.");
        return this._empresa; 
    }
    
    public get arquivos(): Arquivos { return this._arquivos; }
}