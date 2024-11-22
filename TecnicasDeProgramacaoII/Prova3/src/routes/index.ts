import { Router, Request, Response } from "express";
import cargo from './Cargo';
import mensalista from './Mensalista';
import funcionario from './Funcionario';

const routes = Router();

routes.use("/cargo", cargo);
routes.use("/mensalista", mensalista);
routes.use("/funcionario", funcionario);

routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;