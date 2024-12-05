import { config } from './../../knexfile';
import knex from 'knex';
import 'dotenv/config';

const environment =
  process.env.ENVIRONMENT === 'dev' ? 'development' : process.env.ENVIRONMENT || 'production';

export const db = knex(config[environment]);

export const checkDatabaseConnection = async () => {
  try {
    await db.raw('SELECT 1');
    console.log('✅ Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    throw new Error('Falha na conexão com o banco de dados.');
  }
};
