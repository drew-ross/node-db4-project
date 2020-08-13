const db = require('../../data/dbConfig');

module.exports = {
  getIngredients,
  getIngredientRecipes
};

function getIngredients() {
  return db('ingredients')
    .then(ingredients => ingredients)
    .catch(err => console.log(err));
}

function getIngredientRecipes(id) {
  return db('recipes as r')
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'r.id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where('ri.ingredient_id', id)
    .select('r.id as recipe_id', 'r.name as recipe_name', 'i.name')
    .then(recipes => recipes)
    .catch(err => console.log(err));
}