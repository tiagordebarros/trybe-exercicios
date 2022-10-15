const express = require('express');
const {
   validateName,
   validatePrice, 
   validateDescription, 
   validateCreatedAt, 
   validateRating, 
   validateDifficulty,
  } = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/activities',
 validateName,
 validatePrice, 
 validateDescription, 
 validateCreatedAt, 
 validateRating, 
 validateDifficulty,
 (_req, res) => res.status(201)
  .json({ message: 'Atividade cadastrada com sucesso!' }));

module.exports = app;
