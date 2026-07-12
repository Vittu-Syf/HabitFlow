import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;

//import express: importa o framework para criar o servidor e gerenciar rotas e requisições HTTP.
//import cors: importa um middleware quue permite requisições entre diferentes origens.
//import routes from "./routes/index.js": importa o arquivo de rotas principal da aplicação.
//const app = express(): cria a aplicação Express.
//app.use(cors()): registra o middleware de CORS para todas as requisições.
//app.use(express.json()): registra o middleware que converte corpos de requisições JSON em objetos JavaScript acessíveis via req.body.
//app.use(routes): registra o middleware de rotas para todas as requisições.
//export default app: exporta a instância do aplicativo para ser usada em outros arquivos, como o servidor principal.
