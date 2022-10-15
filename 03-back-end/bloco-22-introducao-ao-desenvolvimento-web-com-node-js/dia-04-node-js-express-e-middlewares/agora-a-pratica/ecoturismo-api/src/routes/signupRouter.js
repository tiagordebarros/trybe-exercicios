const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', (_req, res) => {
    const randomToken = generateToken();
    return res.status(200).json({ token: randomToken });
});

module.exports = router;
