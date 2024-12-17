import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'users', async (table) => {
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.boolean('is_active').notNullable().defaultTo(false);
    table.boolean('is_verified').notNullable().defaultTo(false);
    table.string('profile_picture').nullable();
    table.timestamp('deactivated_at').nullable();
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'users');
};
