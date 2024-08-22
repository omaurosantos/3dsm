import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularSalarioReajustado = (salario: number): { percentual: number, novoSalario: number } => {
    let percentual: number;
    
    if (salario <= 650) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    const novoSalario = salario + (salario * percentual / 100);
    return { percentual, novoSalario };
};

leitor.question("Digite o valor do seu salário mensal atual\n", (answer: string) => {
    const salarioAtual = parseFloat(answer);

    if (isNaN(salarioAtual)) {
        console.log("Por favor, insira um valor numérico válido.");
    } else {
        const { percentual, novoSalario } = calcularSalarioReajustado(salarioAtual);

        console.log(`Salário original: R$ ${salarioAtual.toFixed(2)}`);
        console.log(`Percentual de reajuste: ${percentual}%`);
        console.log(`Salário após o reajuste: R$ ${novoSalario.toFixed(2)}`);
    }

    leitor.close();
});
