const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

module.exports = app;
