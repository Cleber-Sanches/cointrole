import 'dotenv/config';
import config from './../database/knexfile';
import knex, { Knex } from 'knex';
import env from './env';

const environment = (env.NODE_ENV || 'development') as keyof typeof config;

if (!config[environment]) {
  throw new Error(
    `Configuração para o ambiente '${String(environment)}' não encontrada no knexfile.`
  );
}

console.log(`⚙️ Usando o ambiente: ${String(environment)}`);

export const db = knex(config[environment] as Knex.Config);

export const checkDatabaseConnection = async () => {
  try {
    await db.raw('SELECT 1');
    console.log('✅ Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    throw new Error('Falha na conexão com o banco de dados.');
  }
};
