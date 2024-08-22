import * as readline from 'readline';

let totalEleitores: number = 0;
let votosBrancos: number = 0;
let votosNulos: number = 0;
let votosValidos: number = 0;
let votosCandidato: number = 0;

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularPercentual = (parcial: number, total: number): number => {
    return (parcial / total) * 100;
};

leitor.question("Digite a quantidade total de eleitores\n", (answer: string) => {
    totalEleitores = parseInt(answer, 10);

    leitor.question("Digite a quantidade de votos em branco\n", (answer: string) => {
        votosBrancos = parseInt(answer, 10);

        leitor.question("Digite a quantidade de votos nulos\n", (answer: string) => {
            votosNulos = parseInt(answer, 10);

            leitor.question("Digite a quantidade de votos válidos\n", (answer: string) => {
                votosValidos = parseInt(answer, 10);

                leitor.question("Digite a quantidade de votos que o candidato obteve\n", (answer: string) => {
                    votosCandidato = parseInt(answer, 10);

                    const totalVotosConsiderados = votosValidos + votosBrancos;
                    const percentualVotosCandidato = calcularPercentual(votosCandidato, totalVotosConsiderados);
                    const percentualVotosMunicipio = calcularPercentual(votosCandidato, totalEleitores);

                    if (percentualVotosCandidato > 10) {
                        console.log(`O candidato foi eleito com ${percentualVotosCandidato.toFixed(2)}% dos votos válidos mais brancos.`);
                    } else {
                        console.log(`O candidato não foi eleito.`);
                    }

                    console.log(`O candidato atingiu ${percentualVotosMunicipio.toFixed(2)}% do total de eleitores do município.`);

                    leitor.close();
                });
            });
        });
    });
});
