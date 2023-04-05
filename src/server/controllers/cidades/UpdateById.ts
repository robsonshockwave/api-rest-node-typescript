import { Request, Response } from "express";
import { IBodyParams, IParamsProps } from "../../dtos/cidades";
import { validation } from "../../middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyParams>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const updateById = async (
  req: Request<IParamsProps, {}, IBodyParams>,
  res: Response
) => {
  if (Number(req.params.id) === 99999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Registro não encontrado!",
      },
    });
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};
