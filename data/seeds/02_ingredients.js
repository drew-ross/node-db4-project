
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cup of popcorn'},
        {id: 2, name: 'stick of butter'},
        {id: 3, name: 'apple'},
        {id: 4, name: 'tablespoon of carmel'},
      ]);
    });
};
