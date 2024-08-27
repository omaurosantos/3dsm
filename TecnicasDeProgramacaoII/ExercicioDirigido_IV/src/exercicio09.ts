function gerarVetorAleatorio(): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < 30; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);
    }
    return vetor;
}

const vetor: number[] = gerarVetorAleatorio();

const maiorNumero = Math.max(...vetor);
const menorNumero = Math.min(...vetor);

const posicaoMaiorNumero = vetor.indexOf(maiorNumero);
const posicaoMenorNumero = vetor.indexOf(menorNumero);

console.log("Vetor gerado:", vetor);
console.log(`Maior número: ${maiorNumero}, na posição: ${posicaoMaiorNumero}`);
console.log(`Menor número: ${menorNumero}, na posição: ${posicaoMenorNumero}`);
