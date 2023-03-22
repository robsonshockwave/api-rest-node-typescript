import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/test", (_, res) => {
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

export { router };
