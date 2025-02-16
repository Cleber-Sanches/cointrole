import 'dotenv/config';
import path from 'path';
import { Knex } from 'knex';
import env from '../config/env';

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
    directory: path.resolve(__dirname, 'migrations'),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
    extension: 'ts',
  },
  connection: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
};

const test: Knex.Config = {
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
    directory: path.resolve(__dirname, 'migrations'),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
    extension: 'ts',
  },
  connection: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: `${env.DB_NAME}_test`,
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
    directory: path.resolve(__dirname, 'migrations'),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
    extension: 'ts',
  },
  connection: env.DB_URL,
};

const config: { development: Knex.Config; production: Knex.Config; test: Knex.Config } = {
  development,
  production,
  test,
};

export default config;
