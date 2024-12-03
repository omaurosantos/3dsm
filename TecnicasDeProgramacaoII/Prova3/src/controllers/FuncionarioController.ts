import { Request, Response } from "express";
import { Funcionario } from "../models"; // Certifique-se de que o modelo Funcionario está exportado corretamente

class FuncionarioController {
    // CREATE
    public async create(req: Request, res: Response): Promise<Response> {
        const { nome, idade, email, fone } = req.body;
        try {
            // Criação de um novo documento de Funcionario
            const document = new Funcionario({ nome, idade, email, fone });
            // Salva e aplica as validações do esquema
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                // Tratamento para duplicidade de índices únicos
                return res.json({ message: "Este e-mail já está em uso!" });
            } else if (error.errors && error.errors["nome"]) {
                return res.json({ message: error.errors["nome"].message });
            } else if (error.errors && error.errors["idade"]) {
                return res.json({ message: error.errors["idade"].message });
            } else if (error.errors && error.errors["email"]) {
                return res.json({ message: error.errors["email"].message });
            } else if (error.errors && error.errors["fone"]) {
                return res.json({ message: error.errors["fone"].message });
            }
            return res.json({ message: error.message });
        }
    }

    // LIST
    public async list(_: Request, res: Response): Promise<Response> {
        try {
            // Lista todos os funcionários e ordena pelo nome em ordem alfabética
            const objects = await Funcionario.find().sort({ nome: "asc" });
            return res.json(objects);
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // DELETE
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; // Identificador do registro a ser excluído
        try {
            const object = await Funcionario.findByIdAndDelete(_id);
            if (object) {
                return res.json({ message: "Registro excluído com sucesso!" });
            } else {
                return res.json({ message: "Registro inexistente!" });
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // UPDATE
    public async update(req: Request, res: Response): Promise<Response> {
        const { id, nome, idade, email, fone } = req.body;
        try {
            // Busca o documento existente
            const document = await Funcionario.findById(id);
            if (!document) {
                return res.json({ message: "Funcionário inexistente!" });
            }
            // Atualiza os campos
            document.nome = nome;
            document.idade = idade;
            document.email = email;
            document.fone = fone;
            // Salva e aplica validações
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                // Tratamento para duplicidade de índices únicos
                return res.json({ message: "Este e-mail já está em uso!" });
            } else if (error.errors && error.errors["nome"]) {
                return res.json({ message: error.errors["nome"].message });
            } else if (error.errors && error.errors["idade"]) {
                return res.json({ message: error.errors["idade"].message });
            } else if (error.errors && error.errors["email"]) {
                return res.json({ message: error.errors["email"].message });
            } else if (error.errors && error.errors["fone"]) {
                return res.json({ message: error.errors["fone"].message });
            }
            return res.json({ message: error.message });
        }
    }
}

export default new FuncionarioController();
