var readline = require('readline');
var resp = "";
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("Digite sua idade em anos\n", function (answer: string) {
    var resp = parseInt(answer,10);
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso na variável resp");
    leitor.close();

    if (resp <= 10){
        console.log("Criança");
    } else {
        if (resp <= 13){
            console.log("Pré-Adolescente");
        } else{
            if (resp <= 17){
                console.log("Adolescente");
            } else {
                if (resp <= 59){
                    console.log("Adulto");
                } else {
                    console.log("Idoso");
                }
            }
        }
    }
});

