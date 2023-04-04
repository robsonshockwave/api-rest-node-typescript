import { Request, Response } from "express";
import { IParamsProps } from "../../dtos/cidades";
import { validation } from "../../middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const getById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
