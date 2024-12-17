import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'family_members', async (table) => {
    table.uuid('user_id').references('id').inTable('users');
    table.string('name').notNullable();
    table.boolean('active').defaultTo(true);
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'family_members');
};
