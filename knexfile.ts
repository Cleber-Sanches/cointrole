import 'dotenv/config';
import { Knex } from 'knex';

const sharedConfig: Knex.Config = {
  client: 'pg',
  pool: {
    min: 0, // muito importante para evitar problemas com conexões ociosas
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 1000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: true,
  },
  migrations: {
    directory: 'src/database/migrations',
    extension: 'ts',
  },
  seeds: {
    directory: 'src/database/seeds',
    extension: 'ts',
  },
};

const development: Knex.Config = {
  ...sharedConfig,
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const production: Knex.Config = {
  ...sharedConfig,
  connection: process.env.DATABASE_URL,
};

export const config: Record<string, Knex.Config> = { development, production };
