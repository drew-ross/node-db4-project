
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Popcorn'},
        {id: 2, name: 'Carmel Apple'},
      ]);
    });
};
