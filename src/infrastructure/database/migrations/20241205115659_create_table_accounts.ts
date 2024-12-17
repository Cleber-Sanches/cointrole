import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'accounts', async (table) => {
    table.uuid('account_type_id').references('id').inTable('account_types');
    table.uuid('user_id').references('id').inTable('users');
    table.string('name').notNullable();
    table.decimal('balance', 15, 2).notNullable().defaultTo('0.00');
    table.boolean('is_active').defaultTo(true);
    table.string('description', 500);
    table.boolean('countable').defaultTo(true);
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'accounts');
};
