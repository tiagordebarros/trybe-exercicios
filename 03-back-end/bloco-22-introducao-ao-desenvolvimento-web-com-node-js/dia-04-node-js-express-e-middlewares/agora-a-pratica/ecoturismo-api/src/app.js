const express = require('express');
const { activitiesRouter, signupRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', signupRouter);

app.use((_req, res) => res.status(404).json({ message: 'Não encontrado!' }));

module.exports = app;
