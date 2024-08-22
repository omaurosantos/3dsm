import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularSalarioReajustado = (categoria: string, salario: number): number => {
    let percentual: number;

    switch (categoria.toUpperCase()) {
        case 'A':
        case 'C':
        case 'F':
        case 'H':
            percentual = 10;
            break;
        case 'B':
        case 'D':
        case 'E':
        case 'I':
        case 'J':
        case 'T':
            percentual = 15;
            break;
        case 'K':
        case 'R':
            percentual = 25;
            break;
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'S':
            percentual = 35;
            break;
        case 'U':
        case 'V':
        case 'X':
        case 'Y':
        case 'W':
        case 'Z':
            percentual = 50;
            break;
        default:
            percentual = 0;
            console.log("Categoria inválida.");
            break;
    }

    return salario + (salario * percentual / 100);
};

const solicitarDados = () => {
    leitor.question("Digite o nome do empregado:\n", (nome: string) => {
        leitor.question("Digite a categoria do empregado:\n", (categoria: string) => {
            leitor.question("Digite o salário do empregado:\n", (salarioStr: string) => {
                const salario = parseFloat(salarioStr);

                if (isNaN(salario) || salario <= 0) {
                    console.log("Por favor, insira um salário válido.");
                } else {
                    const novoSalario = calcularSalarioReajustado(categoria, salario);

                    console.log(`Empregado: ${nome}`);
                    console.log(`Categoria: ${categoria.toUpperCase()}`);
                    console.log(`Salário original: R$ ${salario.toFixed(2)}`);
                    console.log(`Salário após o reajuste: R$ ${novoSalario.toFixed(2)}`);
                }

                leitor.close();
            });
        });
    });
};

solicitarDados();
