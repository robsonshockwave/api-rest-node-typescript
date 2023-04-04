import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send("Servidor ativo!");
});

router.post("/test-post/:id", (req, res) => {
  const cookies = req.cookies;
  const headers = req.headers;
  const query = req.query;
  const params = req.params;
  const body = req.body;

  console.log(cookies, headers, query, params, body);

  return res.json({ body, params, query });
});

router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.create
);

router.get(
  "/cidades",
  CidadesController.getAllValidation,
  CidadesController.getAll
);

router.get(
  "/cidades/:id",
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.put(
  "/cidades/:id",
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);

router.delete(
  "/cidades/:id",
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

export { router };
