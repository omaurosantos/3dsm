import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const podeFormarTriangulo = (x: number, y: number, z: number): boolean => {
    return (x < y + z) && (y < x + z) && (z < x + y);
};

const tipoDeTriangulo = (x: number, y: number, z: number): string => {
    if (x === y && y === z) {
        return "Equilátero";
    } else if (x === y || y === z || x === z) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
};

const solicitarValores = () => {
    leitor.question("Digite o valor de X\n", (xStr: string) => {
        const x = parseFloat(xStr);
        
        leitor.question("Digite o valor de Y\n", (yStr: string) => {
            const y = parseFloat(yStr);
            
            leitor.question("Digite o valor de Z\n", (zStr: string) => {
                const z = parseFloat(zStr);
                
                if (isNaN(x) || isNaN(y) || isNaN(z)) {
                    console.log("Por favor, insira valores numéricos válidos.");
                } else {
                    if (podeFormarTriangulo(x, y, z)) {
                        const tipo = tipoDeTriangulo(x, y, z);
                        console.log(`Os valores X=${x}, Y=${y}, Z=${z} formam um triângulo ${tipo}.`);
                    } else {
                        console.log(`Os valores X=${x}, Y=${y}, Z=${z} não podem formar um triângulo.`);
                    }
                }

                leitor.close();
            });
        });
    });
};

solicitarValores();
