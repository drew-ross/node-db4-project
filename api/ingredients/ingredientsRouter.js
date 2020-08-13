const express = require('express');

const ingDb = require('./ingredientsModel');

const router = express.Router();

router.get('/', (req, res) => {
  ingDb.getIngredients()
    .then(ingredients => res.status(200).json(ingredients))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

router.get('/:id/recipes', (req, res) => {
  const { id } = req.params
  ingDb.getIngredientRecipes(id)
    .then(ingredients => res.status(200).json(ingredients))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

module.exports = router;