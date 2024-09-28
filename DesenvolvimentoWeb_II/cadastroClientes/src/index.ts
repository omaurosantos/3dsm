import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from 'express';
import Cliente from "./models/cliente";

const app = express ();
app.use(bodyParser.json());

const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/cadastroClientes';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log('Erro ao conectar ao MongoDB', err));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Criar cliente
app.post('/clientes', async (req, res) => {
    const { nome, email } = req.body;
    try {
        const novoCliente = new Cliente({ nome, email });
        await novoCliente.save();
        res.status(201).json(novoCliente);
    } catch (error: any) {
        console.error('Erro ao criar cliente:', error); // Adiciona log detalhado do erro no console
        res.status(400).json({ error: 'Erro ao criar cliente', message: error.message });
    }
});

// Ler todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar clientes'});
    }
});

// Atualizar clientes
app.put ('/clientes/:id', async (req, res) =>{
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
        const clienteAtualizado = await Cliente.findByIdAndUpdate(id, {nome, email}, {new:true});
        res.json(clienteAtualizado);
    } catch (error) {
        res.status(400).json({error: 'Erro ao atualizar cliente'});
    }
});

// Deletar cliente
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Cliente.findByIdAndDelete (id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: 'Erro ao deletar cliente'});
    }
});

app.use(express.static('public'));

