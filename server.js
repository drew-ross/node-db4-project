const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./api/recipes/recipesRouter');
const ingredientsRouter = require('./api/ingredients/ingredientsRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('', (req, res) => {
  res.status(200).json({ message: 'api up' });
});

server.use('/api/ingredients', ingredientsRouter);
server.use('/api/recipes', recipesRouter);

module.exports = server;