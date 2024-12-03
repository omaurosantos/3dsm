import { Router, Request, Response } from "express";
import cargo from './cargo';
import mensalista from './mensalista';
import funcionario from './funcionario';

const routes = Router();

routes.use("/cargo", cargo);
routes.use("/mensalista", mensalista);
routes.use("/funcionario", funcionario);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;