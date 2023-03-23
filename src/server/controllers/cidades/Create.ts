import { Request, Response } from "express";
import { ICidade } from "../../dtos/cidades/Create";

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const data = req.body;

  return res.send(data.nome);
};
