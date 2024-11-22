import { Request, Response } from "express";
import { Cargo } from "../models";
class CargoController {
    // create
    public async create(req: Request, res: Response): Promise<Response> {
        const { cbo, descricao } = req.body;
        try {
            // Criação de um novo documento de Cargo
            const document = new Cargo({ cbo, descricao });
            // Salva e aplica as validações do esquema
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                // código 11000 e 11001 indica violação de restrição única (índice duplicado)
                return res.json({ message: "CBO já está em uso!" });
            } else if (error.errors && error.errors["cbo"]) {
                return res.json({ message: error.errors["cbo"].message });
            } else if (error.errors && error.errors["descricao"]) {
                return res.json({ message: error.errors["descricao"].message });
            }
            return res.json({ message: error.message });
        }
    }

    // list
    public async list(_: Request, res: Response): Promise<Response> {
        try {
            // Ordena pela descrição em ordem alfabética
            const objects = await Cargo.find().sort({ descricao: "asc" });
            return res.json(objects);
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // delete
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; // _id do registro a ser excluído
        try {
            const object = await Cargo.findByIdAndDelete(_id);
            if (object) {
                return res.json({ message: "Registro excluído com sucesso!" });
            } else {
                return res.json({ message: "Registro inexistente!" });
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // update
    public async update(req: Request, res: Response): Promise<Response> {
        const { id, cbo, descricao } = req.body;
        try {
            // Busca o documento existente
            const document = await Cargo.findById(id);
            if (!document) {
                return res.json({ message: "Cargo inexistente!" });
            }
            // Atualiza os campos
            document.cbo = cbo;
            document.descricao = descricao;
            // Salva e aplica validações
            const resp = await document.save();
            return res.json(resp);
        } catch (error: any) {
            if (error.code === 11000 || error.code === 11001) {
                // código 11000 e 11001 indica violação de restrição única (índice duplicado)
                return res.json({ message: "CBO já está em uso!" });
            } else if (error.errors && error.errors["cbo"]) {
                return res.json({ message: error.errors["cbo"].message });
            } else if (error.errors && error.errors["descricao"]) {
                return res.json({ message: error.errors["descricao"].message });
            }
            return res.json({ message: error.message });
        }
    }
}

export default new CargoController();
