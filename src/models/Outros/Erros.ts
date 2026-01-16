export interface Erros {
    Error?: string;
    Avisos?: string[];
}

export interface NewError {
    erros?: ErrorInfo[];
    avisos?: string[];
}

export interface ErrorInfo {
    codigo?: string;
    descricao?: string;
    correcao?: string;
}

