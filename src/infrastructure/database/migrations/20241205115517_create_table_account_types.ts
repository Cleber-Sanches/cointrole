import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'account_types', async (table) => {
    table.string('name').notNullable();
    table.string('description', 500);
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'account_types');
};
