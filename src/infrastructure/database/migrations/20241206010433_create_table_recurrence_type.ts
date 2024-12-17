import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'recurrence_type', async (table) => {
    table.string('name').notNullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'recurrence_type');
};
