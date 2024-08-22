let mes: string = "";
var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("Digite o número que represente qualquer mês do ano\n", function (answer: string) {
    mes = answer.padStart(2, '0');
    switch (mes) {
        case "01":
            console.log("Você se referiu à Janeiro");
            break
        case "02":
            console.log("Você se referiu à Feveireiro");
            break
        case "03":
            console.log("Você se referiu à Março");
            break
        case "04":
            console.log("Você se referiu à Abril");
            break
        case "05":
            console.log("Você se referiu à Maio");
            break
        case "06":
            console.log("Você se referiu à Junho");
            break
        case "07":
            console.log("Você se referiu à Julho");
            break
        case "08":
            console.log("Você se referiu à Agosto");
            break
        case "09":
            console.log("Você se referiu à Setembro");
            break
        case "10":
            console.log("Você se referiu à Outubro");
            break
        case "11":
            console.log("Você se referiu à Novembro");
            break
        case "12":
            console.log("Você se referiu à Dezembro");
            break;
        default:
            console.log("Você digitou um número que não há mês representante");
    }
    leitor.close();
});