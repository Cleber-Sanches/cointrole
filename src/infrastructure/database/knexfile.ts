import path from 'path';
import 'dotenv/config';
import { Knex } from 'knex';

const development: Knex.Config = {
  client: 'pg',
  pool: {
    min: 0,
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 1000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: true,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'infreastructure', 'database', 'migrations'),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'infreastructure', 'database', 'seeds'),
    extension: 'ts',
  },
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const production: Knex.Config = {
  client: 'pg',
  pool: {
    min: 0,
    max: 10,
    createTimeoutMillis: 30000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 1000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: true,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'infreastructure', 'database', 'migrations'),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'infreastructure', 'database', 'seeds'),
    extension: 'ts',
  },
  connection: process.env.DATABASE_URL,
};

const config: { development: Knex.Config; production: Knex.Config } = {
  development,
  production,
};

export default config;
