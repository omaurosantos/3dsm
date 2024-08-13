function calcularPercentuais(totalEleitores: number, votosBrancos: number, votosNulos: number, votosValidos: number): void {
    const percentualBrancos = (votosBrancos / totalEleitores) * 100;
    const percentualNulos = (votosNulos / totalEleitores) * 100;
    const percentualValidos = (votosValidos / totalEleitores) * 100;

    console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
    console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
    console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}

const totalEleitores = 3000; 
const votosBrancos = 240;    
const votosNulos = 360;      
const votosValidos = 2500;   

calcularPercentuais(totalEleitores, votosBrancos, votosNulos, votosValidos);