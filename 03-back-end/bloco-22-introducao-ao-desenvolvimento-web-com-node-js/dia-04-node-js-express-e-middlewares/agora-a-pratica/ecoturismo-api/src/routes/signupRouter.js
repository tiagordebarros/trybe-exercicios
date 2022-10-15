const express = require('express');
const { validateSignup } = require('../middlewares');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', validateSignup, (_req, res) => {
    const randomToken = generateToken();
    return res.status(200).json({ token: randomToken });
});

module.exports = router;
