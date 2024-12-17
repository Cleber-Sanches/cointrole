import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'categories', async (table) => {
    table.uuid('user_id').notNullable().references('id').inTable('users');
    table.string('name').notNullable();
    table.enum('type', ['income', 'expense']).notNullable();
    table.string('color').nullable();
    table.uuid('icon').notNullable().references('id').inTable('icons');
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'categories');
};
