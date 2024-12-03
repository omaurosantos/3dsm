import express from "express";
import dotenv from "dotenv";
import connect from "./models/connection";
import MensalistaModel from "./models/MensalistaModel";
import routes from "./routes";
import fetch from "node-fetch"

dotenv.config();

// será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;
const app = express(); // cria o servidor e coloca na variável app

// suportar parâmetros JSON no body da requisição
app.use(express.json());

// conecta ao MongoDB no início da aplicação
connect();

// inicializa o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

// define a rota para o pacote /routes
app.use(routes);

// Incluir Mensalistas

var mensalistas: Array<MensalistaModel> = [];
var mensalista = new MensalistaModel(1234567891, 5000, "Marcos da Silva");
mensalistas.push(mensalista);
mensalista = new MensalistaModel(1212121212, 3512.15, "Ana Maria Brega");
mensalistas.push(mensalista);
mensalista = new MensalistaModel(2121212121, 2521.54, "Paulo França");
mensalistas.push(mensalista);


var x = 0;
mensalistas.forEach(mensalista => {
    (async () => {
        mensalista.id = await fetch('http://localhost:3001/mensalista', {  // cria conexão HTTP com post para salvar o objeto no BD
            method: 'POST', // tipo de requisição
            headers: { // cabeçalho da requisição
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // corpo da requisição convertido para JSON
                matricula: mensalista.matricula,
                salario: mensalista.salario,
                funcionario: mensalista.funcionario,
            })
        })
            .then(response => response.json()) // resposta do backend
            .then(data => {
                //            console.log(data); // a rotina retorna o ID do objeto cadastrado
                mensalistas[x].id = data._id
                x++;
                return data._id;
            })
            .catch(error => {
                console.error(error); // mostra erro casso ocorra
            })
    })();
});