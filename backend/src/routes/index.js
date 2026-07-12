import { Router } from "express";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/auth", authRoutes);

export default router;

//import { Router } from "express": importa o módulo Router do Express, que permite criar rotas modulares e gerenciáveis.
//const router = Router(): cria um onjeto responsavel por gerenciar as rotas da aplicação.
//router.use("/auth", authRoutes): registra as rotas de autenticação, prefixando-as com "/auth".
//export default router: exporta o objeto router para ser usado em outros arquivos, como o arquivo app.js.
