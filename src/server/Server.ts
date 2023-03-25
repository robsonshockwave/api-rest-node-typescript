import express from "express";
import "./services/TranslationsYup";

import { router } from "./routes";
import "dotenv/config";

const server = express();

server.use(express.json());

server.use(router);

export { server };
