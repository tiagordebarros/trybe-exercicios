const express = require('express');

const bookController = require('./controllers/bookController');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', bookController.getAll);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

module.exports = app;
