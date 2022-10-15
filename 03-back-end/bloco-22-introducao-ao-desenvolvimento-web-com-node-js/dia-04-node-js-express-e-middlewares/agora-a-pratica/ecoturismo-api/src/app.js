const express = require('express');
const {
   validateName, validatePrice, validateDescription, validateCreatedAt,
  } = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/activities',
 validateName, validatePrice, validateDescription, validateCreatedAt,
 (_req, res) => res.status(201)
  .json({ message: 'Atividade cadastrada com sucesso!' }));

module.exports = app;
