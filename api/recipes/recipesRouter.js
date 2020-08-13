const express = require('express');

const recDb = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
  recDb.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  recDb.getShoppingList(id)
    .then(list => res.status(200).json(list))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

module.exports = router;