import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'icons', async (table) => {
    table.string('name').notNullable();
    table.string('icon_url', 500).notNullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'icons');
};
