import 'dotenv/config';
import express from 'express';
import { checkDatabaseConnection } from './infrastructure/config/connection';
import { indexRoutes } from './infrastructure/http/routes';

const app = express();
app.use(express.json());

app.use(indexRoutes);

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
