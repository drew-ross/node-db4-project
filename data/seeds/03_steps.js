
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          id: 1,
          recipe_id: 1,
          ingredient_id: 1,
          step: 1,
          instructions: 'Pop popcorn',
          quantity: 0.5
        },
        {
          id: 2,
          recipe_id: 1,
          ingredient_id: 2,
          step: 2,
          instructions: 'Put butter on popcorn',
          quantity: 0.5
        },
        {
          id: 3,
          recipe_id: 2,
          ingredient_id: 3,
          step: 1,
          instructions: 'Put apple on stick',
          quantity: 1
        },
        {
          id: 4,
          recipe_id: 2,
          ingredient_id: 4,
          step: 2,
          instructions: 'Dip apple in warm carmel',
          quantity: 1
        },
      ]);
    });
};
