import { server } from "./server/Server";

server.listen(process.env.PORT || 5050, () =>
  console.log("App rodando! ❤️", " Porta:", process.env.PORT || 5050)
);
