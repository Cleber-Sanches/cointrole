import 'dotenv/config';
import knex from 'knex';
import config from '../database/knexfile';

const environment = (process.env.ENVIRONMENT || 'production') as keyof typeof config;

if (!config[environment]) {
  throw new Error(`Configuração para o ambiente '${environment}' não encontrada no knexfile.`);
}

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
