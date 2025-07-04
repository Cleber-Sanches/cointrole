import { Knex } from 'knex';

import 'dotenv/config';
import { env } from './src/infrastructure/config/env';

const baseConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: env.DB_HOST,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: Number(env.DB_PORT),
  },
  pool: {
    min: 0, // very important!!!
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 1000, // since no share, set this to a small number
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: true,
  },
  migrations: {
    directory: './src/infrastructure/database/migrations',
    extension: 'ts',
  },
  seeds: {
    directory: './src/infrastructure/database/seeds',
    extension: 'ts',
    timestampFilenamePrefix: true,
  },
};

const config = {
  development: baseConfig,
  production: baseConfig, // ajuste conforme necessário
  test: baseConfig, // ajuste conforme necessário
};

export default config;
