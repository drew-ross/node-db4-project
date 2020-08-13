const express = require('express');

const recDb = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'endpoint up' });
});

module.exports = router;