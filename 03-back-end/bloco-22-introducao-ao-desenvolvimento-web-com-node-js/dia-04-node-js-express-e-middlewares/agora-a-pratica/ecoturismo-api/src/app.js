const express = require('express');
const { activitiesRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRouter);

app.use((_req, res) => res.status(404).json({ message: 'Não encontrado!' }));

module.exports = app;
