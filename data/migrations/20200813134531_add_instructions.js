
exports.up = function (knex) {
  return knex.schema
    .table('recipe_ingredients', tbl => {
      tbl.text('instructions')
        .notNullable()
        .default('');
    });
};

exports.down = function (knex) {
  return knex.schema
    .table('recipe_ingredients', tbl => {
      tbl.dropColumn('instructions');
    });
};
