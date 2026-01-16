export enum TipoRateio {
    Substituir,
    Somar,
    Subtrair
}

export class BrasilNFeHelper {
    
    /**
     * Distribui um valor total entre os itens da lista com base na proporção de um segundo seletor.
     */
    public static ratear<T>(
        itens: T[], 
        valorTotal: number, 
        seletor: (item: T) => number, 
        seletorProporcao: (item: T) => number, 
        tipoRateio: TipoRateio,
        atualizarItem: (item: T, novoValor: number) => void
    ): void {
        const totalProporcao = itens.reduce((sum, item) => sum + seletorProporcao(item), 0);
        if (totalProporcao === 0) return;

        let somaArredondada = 0;
        const ultimoIndex = itens.length - 1;

        for (let i = 0; i < itens.length; i++) {
            const item = itens[i];
            const propValor = seletorProporcao(item);
            let proporcao = propValor / totalProporcao;
            let valorRateado = parseFloat(((proporcao * valorTotal) / propValor).toFixed(6)); // Math.Round com 6 casas

            if (i === ultimoIndex) {
                valorRateado = (valorTotal - somaArredondada) / propValor;
            }

            somaArredondada += valorRateado * propValor;
            const valorAtual = seletor(item);
            const novoValor = this.aplicarRateio(valorAtual, valorRateado, tipoRateio);

            atualizarItem(item, novoValor);
        }
    }

    private static aplicarRateio(valorAtual: number, valorRateado: number, tipoRateio: TipoRateio): number {
        switch (tipoRateio) {
            case TipoRateio.Substituir:
                return valorRateado;
            case TipoRateio.Somar:
                return valorAtual + valorRateado;
            case TipoRateio.Subtrair:
                return valorAtual - valorRateado;
            default:
                return valorAtual;
        }
    }
}