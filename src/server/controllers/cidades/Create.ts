import { Request, Response } from "express";
import { ICidade } from "../../dtos/cidades";
import * as yup from "yup";

import { validation } from "../../middlewares";
import { StatusCodes } from "http-status-codes";

export const createValidation = validation((getSchema) => {
  return {
    body: getSchema<ICidade>(
      yup.object().shape({
        nome: yup.string().required().min(3),
      })
    ),
  };
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
