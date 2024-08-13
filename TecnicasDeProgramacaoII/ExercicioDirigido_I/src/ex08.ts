function calcularNovoSalario(salarioAtual: number, percentualReajuste: number): void {
    const aumento = (salarioAtual * percentualReajuste) / 100;
    const novoSalario = salarioAtual + aumento;

    console.log(`Salário antigo: R$ ${salarioAtual.toFixed(2)}`);
    console.log(`Percentual de reajuste: ${percentualReajuste}%`);
    console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

const salarioAtual = 5000;
const percentualReajuste = 5;   

calcularNovoSalario(salarioAtual, percentualReajuste);
