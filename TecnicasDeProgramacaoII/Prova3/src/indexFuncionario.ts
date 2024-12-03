import express from "express";
import dotenv from "dotenv";
import connect from "./models/connection";
import FuncionarioModel from "./models/FuncionarioModel";
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

// Incluir Funcionários

var funcionarios: Array<FuncionarioModel> = [];
var funcionario = new FuncionarioModel("Marcos da Silva", 21, "marcos.silva@dev.xpto.tec.br", "12912343567");
funcionarios.push(funcionario);
funcionario = new FuncionarioModel("Ana Maria Brega", 25, "ana.brega@adm.xpto.tec.br", "12999979999");
funcionarios.push(funcionario);
funcionario = new FuncionarioModel("Paulo França", 18, "paulo.fraca@fiscal.xpto.tec.br", "12999967999");
funcionarios.push(funcionario);
funcionario = new FuncionarioModel("Edson Arantes", 30, "edson.arantes@gmail.sp.gov.br", "12999957999");
funcionarios.push(funcionario);



var x = 0;
funcionarios.forEach(funcionario => {
    (async () => {
        funcionario.id = await fetch('http://localhost:3001/funcionario', {  // cria conexão HTTP com post para salvar o objeto no BD
            method: 'POST', // tipo de requisição
            headers: { // cabeçalho da requisição
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // corpo da requisição convertido para JSON
                nome: funcionario.nome,
                idade: funcionario.idade,
                email: funcionario.email,
                fone: funcionario.fone,
            })
        })
            .then(response => response.json()) // resposta do backend
            .then(data => {
                //            console.log(data); // a rotina retorna o ID do objeto cadastrado
                funcionarios[x].id = data._id
                x++;
                return data._id;
            })
            .catch(error => {
                console.error(error); // mostra erro casso ocorra
            })
    })();
});