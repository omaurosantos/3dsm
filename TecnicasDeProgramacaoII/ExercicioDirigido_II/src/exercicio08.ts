let letra: string = "";
var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("Digite uma letra qualquer:\n", function (answer: string) {
    var timefut = answer;
    switch (timefut) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("A letra digitada é uma vogal!");
            break;
        default:
            console.log("A letra digitada é uma consoante.");
    }
    leitor.close();
});