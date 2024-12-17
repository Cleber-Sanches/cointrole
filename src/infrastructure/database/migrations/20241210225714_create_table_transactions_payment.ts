import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'transactions_payment', async (table) => {
    table.uuid('transaction_id').references('id').inTable('transactions');
    table.date('payment_date').notNullable();
    table.uuid('tags_id').references('id').inTable('tags');
    table.decimal('amount', 15, 2).notNullable();
    table.string('description');
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'transactions_payment');
};
