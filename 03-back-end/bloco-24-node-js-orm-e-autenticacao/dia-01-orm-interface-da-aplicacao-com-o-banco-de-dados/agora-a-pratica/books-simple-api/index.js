const express = require('express');

const bookController = require('./controllers/bookController');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);
app.post('/books', bookController.create);
app.put('/books/:id', bookController.update);
app.delete('/books/:id', bookController.remove);

app.use((_req, res) => { return res.status(500).json({ message: 'Algo deu errado!' }) });

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

module.exports = app;
