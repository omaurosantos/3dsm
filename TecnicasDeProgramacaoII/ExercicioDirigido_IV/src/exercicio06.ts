import * as readlineSync from 'readline-sync';

const nomes: string[] = [], notas: number[][] = [], medias: number[] = [];

for (let i = 0; i < 5; i++) {
    const nome = readlineSync.question(`Digite o nome do aluno ${i + 1}: `);
    nomes.push(nome);

    const nota1 = Number(readlineSync.question(`Digite a primeira nota de ${nome}: `));
    const nota2 = Number(readlineSync.question(`Digite a segunda nota de ${nome}: `));

    notas.push([nota1, nota2]);
}

for (let i = 0; i < 5; i++) {
    const media = (notas[i][0] + notas[i][1]) / 2;
    medias.push(media);
}

for (let i = 0; i < 5; i++) {
    console.log(`Aluno: ${nomes[i]}`);
    console.log(`Nota 1: ${notas[i][0]}, Nota 2: ${notas[i][1]}`);
    console.log(`Média: ${medias[i]}\n`);
}