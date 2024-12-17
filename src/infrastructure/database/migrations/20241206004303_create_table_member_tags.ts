import { BaseRepository } from 'bq-knex-base-repository';
import { Knex } from 'knex';

exports.up = async function (knex: Knex) {
  await BaseRepository.createTable(knex, 'member_tags', async (table) => {
    table.uuid('member_id').notNullable().references('id').inTable('family_members');
    table.uuid('tag_id').notNullable().references('id').inTable('tags');
  });
};

exports.down = async function (knex: Knex) {
  await BaseRepository.dropTable(knex, 'member_tags');
};
