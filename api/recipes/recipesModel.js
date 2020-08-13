const db = require('../../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db('recipes')
    .then(recipes => recipes)
    .catch(err => console.log(err));
}

function getShoppingList(id) {
  return db('recipes as r')
    .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .select('i.name', 'ri.quantity')
    .where('r.id', id)
    .then(ingredients => ingredients)
    .catch(err => console.log(err));
}

function getInstructions(id) {
  return db('recipe_ingredients as ri')
    .join('recipes as r', 'recipe_id', 'r.id')
    .join('ingredients as i', 'ingredient_id', 'i.id')
    .select('ri.id', 'ri.step', 'ri.quantity', 'r.name', 'i.name', 'ri.instructions')
    .where('ri.recipe_id', id)
    .orderBy('ri.step')
    .then(steps => steps)
    .catch(err => console.log(err));
}