function gerarMatrizQuadrada(tamanho: number): number[][] {
    const matriz: number[][] = [];
    for (let i = 0; i < tamanho; i++) {
        const linha: number[] = [];
        for (let j = 0; j < tamanho; j++) {
            linha.push(Math.floor(Math.random() * 100) + 1);
        }
        matriz.push(linha);
    }
    return matriz;
}

function somarPrimeiraLinha(matriz: number[][]): number[][] {
    const tamanho = matriz.length;
    const matrizSoma: number[][] = [];

    for (let i = 0; i < tamanho; i++) {
        matrizSoma.push([...matriz[i]]);
    }

    const primeiraLinha = matriz[0];

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            matrizSoma[i][j] += primeiraLinha[j];
        }
    }
    return matrizSoma;
}

const tamanho = parseInt(prompt("Digite o tamanho da matriz quadrada:") || "3", 10);

const matrizOriginal = gerarMatrizQuadrada(tamanho);

const matrizSomada = somarPrimeiraLinha(matrizOriginal);

console.log("Matriz Original:");
console.table(matrizOriginal);
console.log("Matriz com a soma da primeira linha:");
console.table(matrizSomada);
