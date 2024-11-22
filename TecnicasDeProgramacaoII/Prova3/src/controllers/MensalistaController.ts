import { Request, Response } from "express";
import { Mensalista } from "../models"; // Certifique-se de que o modelo Mensalista está exportado corretamente

class MensalistaController {
    // CREATE
    public async create(req: Request, res: Response): Promise<Response> {
        const { matricula, salario, funcionario } = req.body;
        try {
            // Criação de um novo documento de Mensalista
            const document = new Mensalista({ matricula, salario, funcionario });
            // Salva e aplica as validações do esquema
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                // Tratamento para duplicidade de índices únicos
                return res.json({ message: "A matrícula ou funcionário já está em uso!" });
            } else if (error.errors && error.errors["matricula"]) {
                return res.json({ message: error.errors["matricula"].message });
            } else if (error.errors && error.errors["salario"]) {
                return res.json({ message: error.errors["salario"].message });
            } else if (error.errors && error.errors["funcionario"]) {
                return res.json({ message: error.errors["funcionario"].message });
            }
            return res.json({ message: error.message });
        }
    }

    // LIST
    public async list(_: Request, res: Response): Promise<Response> {
        try {
            // Lista todos os mensalistas e popula os dados dos funcionários associados
            const objects = await Mensalista.find()
                .populate("funcionario") // Popula os dados dos funcionários
                .sort({ matricula: "asc" }); // Ordena pela matrícula
            return res.json(objects);
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // DELETE
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; // Identificador do registro a ser excluído
        try {
            const object = await Mensalista.findByIdAndDelete(_id);
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
        const { id, matricula, salario, funcionario } = req.body;
        try {
            // Busca o documento existente
            const document = await Mensalista.findById(id);
            if (!document) {
                return res.json({ message: "Mensalista inexistente!" });
            }
            // Atualiza os campos
            document.matricula = matricula;
            document.salario = salario;
            document.funcionario = funcionario;
            // Salva e aplica validações
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                // Tratamento para duplicidade de índices únicos
                return res.json({ message: "A matrícula ou funcionário já está em uso!" });
            } else if (error.errors && error.errors["matricula"]) {
                return res.json({ message: error.errors["matricula"].message });
            } else if (error.errors && error.errors["salario"]) {
                return res.json({ message: error.errors["salario"].message });
            } else if (error.errors && error.errors["funcionario"]) {
                return res.json({ message: error.errors["funcionario"].message });
            }
            return res.json({ message: error.message });
        }
    }
}

export default new MensalistaController();
