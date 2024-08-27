function gerarVetorAleatorio(): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < 20; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);
    }
    return vetor;
}

const vetor: number[] = gerarVetorAleatorio();

vetor.sort(( a, b) => a - b);

console.log("Vetor ordenado:", vetor);

export{};