
exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('id');
      tbl.text('name', 255)
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('id');
      tbl.text('name', 255)
        .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments('id');
      tbl.integer('step')
        .notNullable()
        .unsigned();
      tbl.float('quantity')
        .notNullable()
        .unsigned();
      //foreign keys
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipes.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('ingredients.id')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients');
};
