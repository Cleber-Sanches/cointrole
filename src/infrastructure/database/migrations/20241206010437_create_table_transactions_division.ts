import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'transactions_division', async (table) => {
    table.uuid('transaction_id').references('id').inTable('transactions');
    table.uuid('tag_id').references('id').inTable('tags');
    table.decimal('amount', 15, 2).notNullable();
    table.decimal('percentage', 15, 2).notNullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'transactions_division');
};
