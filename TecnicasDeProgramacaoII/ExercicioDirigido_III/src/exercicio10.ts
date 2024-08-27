var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros: number[] = [];
let tentativas = 0;

function pedirNumero() {
    if (numeros.length < 10) {
        leitor.question(`Digite um número inteiro entre 1 e 100 (${10 - numeros.length} restantes): `, (input: string) => {
            const numero = parseInt(input);

            if (isNaN(numero) || numero < 1 || numero > 100) {
                console.log('Por favor, insira um número válido entre 1 e 100.');
            } else if (numeros.includes(numero)) {
                console.log('Número já inserido. Tente outro.');
            } else {
                numeros.push(numero);
            }

            tentativas++;
            pedirNumero();
        });
    } else {
        const menorNumero = Math.min(...numeros);
        const maiorNumero = Math.max(...numeros);
        const soma = numeros.reduce((acc, val) => acc + val, 0);
        const numerosOrdenados = numeros.sort((a, b) => a - b);

        console.log(`Números informados: ${numerosOrdenados.join(', ')}`);
        console.log(`Menor número: ${menorNumero}`);
        console.log(`Maior número: ${maiorNumero}`);
        console.log(`Soma dos números: ${soma}`);

        leitor.close();
    }
}

pedirNumero();