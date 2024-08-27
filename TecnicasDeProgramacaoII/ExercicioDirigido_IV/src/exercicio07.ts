function gerarVetorAleatorio(): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);
    }
    return vetor;
}

const v1: number[] = gerarVetorAleatorio();
const v2: number[] = gerarVetorAleatorio();

const v3: number[] = [...v1, ...v2];

console.log("Vetor v1:", v1);
console.log("Vetor v2:", v2);
console.log("Vetor v3:", v3);

export{}
