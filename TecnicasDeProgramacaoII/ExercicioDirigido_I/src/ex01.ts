let peso:number, altura:number, imc:number, alturaQuadrado:number;

peso = 80;
altura = 1.82;

alturaQuadrado = Math.pow(altura,2);

imc = peso/alturaQuadrado;

console.log("O IMC É:", imc);

export{};
