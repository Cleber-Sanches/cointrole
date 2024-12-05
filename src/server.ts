import { app } from './app';
import { checkDatabaseConnection } from './config/database';
import 'dotenv/config';

const startServer = async () => {
  try {
    await checkDatabaseConnection();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
  }
};

startServer();
