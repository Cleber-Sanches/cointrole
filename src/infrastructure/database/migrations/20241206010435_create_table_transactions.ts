import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'transactions', async (table) => {
    table.uuid('user_id').references('id').inTable('users').notNullable();
    table.uuid('account_id').references('id').inTable('accounts');
    table.uuid('credit_card_id').references('id').inTable('credit_cards');
    table.uuid('category_id').references('id').inTable('categories').notNullable();
    table.uuid('recurrence_type_id').references('id').inTable('recurrence_type');
    table.decimal('total_amount', 15, 2).notNullable();
    table.timestamp('transaction_date').defaultTo(knex.fn.now()).notNullable();
    table.string('description');
    table.json('tags');
    table.boolean('recurrence').defaultTo(false);
    table.integer('recurrence_interval').defaultTo(0);
    table.boolean('payment').defaultTo(true);
    table.boolean('is_income').notNullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'transactions');
};
