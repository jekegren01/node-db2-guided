
exports.up = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
      table.boolean("tropical").defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
      table.dropColumn("tropical")
  })
};
