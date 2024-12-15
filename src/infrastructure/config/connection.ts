import knex from 'knex';
import env from './env';

export const db = knex({
  client: env.DATABASE_CLIENT,
  connection: {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  },
});

export const checkDatabaseConnection = async () => {
  try {
    await db.raw('SELECT 1');
    console.log('✅ Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    throw new Error('Falha na conexão com o banco de dados.');
  }
};
