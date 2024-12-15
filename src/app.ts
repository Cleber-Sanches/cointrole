import express, { Express } from 'express';
import { checkDatabaseConnection } from './infrastructure/config/connection';
import { indexRoutes } from './infrastructure/http/routes';

export const app: Express = express();
const port = 3333;

app.use(express.json());
app.use(indexRoutes);

const startServer = async () => {
  await checkDatabaseConnection();
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
};

startServer();
