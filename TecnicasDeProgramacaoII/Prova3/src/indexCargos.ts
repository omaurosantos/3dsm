import express from "express";
import dotenv from "dotenv";
import connect from "./models/connection";
import CargoModel from "./models/CargoModel";
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

// Incluir Cargos

var cargos: Array<CargoModel> = [];
var cargo = new CargoModel("Analista Fiscal", "2512-25");
cargos.push(cargo);
cargo = new CargoModel("Programador", "3171-05");
cargos.push(cargo);
cargo = new CargoModel("Desenvolvedor", "3171-05");
cargos.push(cargo);
var cargo = new CargoModel("Técnico de Informática", "3132-20");
cargos.push(cargo);
var cargo = new CargoModel("Gerente de Desenvolvimento de Sistemas", "1425-10");
cargos.push(cargo);


var x = 0;
cargos.forEach(cargo => {
    (async () => {
        cargo.id = await fetch('http://localhost:3001/cargo', {  // cria conexão HTTP com post para salvar o objeto no BD
            method: 'POST', // tipo de requisição
            headers: { // cabeçalho da requisição
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // corpo da requisição convertido para JSON
                descricao: cargo.descricao,
                cbo: cargo.cbo,
            })
        })
            .then(response => response.json()) // resposta do backend
            .then(data => {
                //            console.log(data); // a rotina retorna o ID do objeto cadastrado
                cargos[x].id = data._id
                x++;
                return data._id;
            })
            .catch(error => {
                console.error(error); // mostra erro casso ocorra
            })
    })();
});