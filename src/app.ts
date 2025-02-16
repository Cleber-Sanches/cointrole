import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { checkDatabaseConnection } from './infrastructure/config/connection';
import { routes } from './infrastructure/http/routes/routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

const PORT = process.env.PORT || 3000;

checkDatabaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error);
  });

export { app };
