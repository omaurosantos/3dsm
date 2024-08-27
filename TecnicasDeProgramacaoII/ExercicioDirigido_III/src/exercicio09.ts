var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehPrimo(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function encontrarFatoresPrimos(num: number): number[] {
    const fatoresPrimos: number[] = [];
    let divisor = 2;

    while (num > 1) {
        if (num % divisor === 0) {
            if (!fatoresPrimos.includes(divisor)) {
                fatoresPrimos.push(divisor);
            }
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return fatoresPrimos;
}

leitor.question('Digite um número inteiro: ', (input: string) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
    } else {
        if (ehPrimo(numero)) {
            console.log(`O número ${numero} é primo.`);
        } else {
            const fatores = encontrarFatoresPrimos(numero);
            console.log(`O número ${numero} não é primo. Os fatores primos únicos são: ${fatores.join(', ')}.`);
        }
    }

    leitor.close();
});