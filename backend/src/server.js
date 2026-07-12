import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//import "dotenv/config": importa as variaveis do arquivo .env para o processo do Node.js.
//import app from "./app.js": importa a instância do aplicativo Express do arquivo app.js.
//const PORT = process.env.PORT || 3000: define a porta em que o servidor irá escutar, usando a variável de ambiente PORT ou 3000 como padrão.
//app.listen(PORT, () => { ... }): inicia o servidor e escuta na porta definida, exibindo uma mensagem no console quando o servidor estiver rodando.
