import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'credit_cards', async (table) => {
    table.uuid('account_id').references('id').inTable('accounts');
    table.decimal('credit_limit', 15, 2).notNullable();
    table.boolean('is_active').defaultTo(true);
    table.date('due_date').notNullable();
    table.decimal('amount', 15, 2).notNullable();
    table.string('status').notNullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'credit_cards');
};
