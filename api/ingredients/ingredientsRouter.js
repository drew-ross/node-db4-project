const express = require('express');

const ingDb = require('./ingredientsModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'endpoint up' });
});

module.exports = router;