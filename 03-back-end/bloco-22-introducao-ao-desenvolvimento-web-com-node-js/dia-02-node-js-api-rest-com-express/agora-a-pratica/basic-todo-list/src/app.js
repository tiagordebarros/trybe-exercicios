const express = require('express');

const app = express();

const activities = [
    {
        id: 1,
        description: 'Banho no cachorro',
        status: 'A fazer',
    },
    {
        id: 2,
        description: 'Cortar a grama',
        status: 'A fazer',
    },
    {
        id: 3,
        description: 'Estudar JavaScript',
        status: 'Feito',
    },
];

app.get('/myActivities', (_req, res) => {
    return res.status(200).json({ activities });
});

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;
    
    const findById = activities.find((activity) => activity.id === Number(id));
    
    return res.status(200).json(findById);
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    const findByQuery = activities.filter((activity) => activity.status === status);

    return res.status(200).json(findByQuery);
});

module.exports = app;
