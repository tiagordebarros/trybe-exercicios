const express = require('express');

const router = express.Router();

const {
    validateName,
    validatePrice, 
    validateDescription, 
    validateCreatedAt, 
    validateRating, 
    validateDifficulty,
   } = require('../middlewares');

router.post('/',
 validateName,
 validatePrice, 
 validateDescription, 
 validateCreatedAt, 
 validateRating, 
 validateDifficulty,
 (_req, res) => res.status(201)
  .json({ message: 'Atividade cadastrada com sucesso!' }));

module.exports = router;
