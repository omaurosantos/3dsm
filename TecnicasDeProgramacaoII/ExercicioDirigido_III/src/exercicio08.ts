var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVogais(palavra:string){
    const vogais = 'aeiouAEIOU';
    let numVogais = 0;
    let numConsoantes = 0;

    for (let i = 0; i < palavra.length; i++){
        const letra = palavra[i];
        if (vogais.includes(letra)){
            numVogais++;
        } else if (letra.match(/[a-zA-Z]/)){
            numConsoantes++;
        }
    }

    console.log(`A palavra "${palavra}" contem ${numVogais} vogais e ${numConsoantes}.`);
}

leitor.question ('Digite uma palavra qualquer: ', (palavra: string) => {
    contarVogais(palavra);
    leitor.close();
});