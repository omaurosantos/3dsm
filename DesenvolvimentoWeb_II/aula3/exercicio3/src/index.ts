import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question: string): Promise<number> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(parseFloat(answer));
    });
  });
}

async function main() {
  try {
    const prova1 = await askQuestion('Digite a nota da Prova 1 (10%): ');
    const prova2 = await askQuestion('Digite a nota da Prova 2 (10%): ');
    const prova3 = await askQuestion('Digite a nota da Prova 3 (30%): ');
    const atividades = await askQuestion('Digite a nota das Atividades (20%): ');
    const api = await askQuestion('Digite a nota da API (30%): ');

    const notaFinal = (
      prova1 * 0.1 +
      prova2 * 0.1 +
      prova3 * 0.3 +
      atividades * 0.2 +
      api * 0.3
    ).toFixed(2);

    console.log(`A nota final do aluno é: ${notaFinal}`);
  } catch (error) {
    console.error('Ocorreu um erro: ', error);
  } finally {
    rl.close();
  }
}

main();
