import { Request, Response } from "express";
import { IQueryProps } from "../../dtos/cidades";
import * as yup from "yup";

import { validation } from "../../middlewares";
import { StatusCodes } from "http-status-codes";

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().moreThan(0),
      limit: yup.number().moreThan(0),
      filter: yup.string(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  console.log(req.query);

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
