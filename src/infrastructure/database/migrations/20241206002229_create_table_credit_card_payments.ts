import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'credit_card_payments', async (table) => {
    table.uuid('credit_card_id').references('id').inTable('credit_cards');
    table.timestamp('payment_date').defaultTo(knex.fn.now());
    table.decimal('amount', 15, 2).notNullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'credit_card_payments');
};
