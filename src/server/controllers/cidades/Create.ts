import { Request, Response } from "express";
import { ICidade, IFilter } from "../../dtos/cidades";
import * as yup from "yup";

import { validation } from "../../middlewares";

export const createValidation = validation((getSchema) => {
  return {
    body: getSchema<ICidade>(
      yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(2).max(2),
      })
    ),
    query: getSchema<IFilter>(
      yup.object().shape({
        filter: yup.string().optional().min(3),
      })
    ),
  };
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  return res.send(req.body);
};
