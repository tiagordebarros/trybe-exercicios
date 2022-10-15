const auth = require('./auth');
const validateName = require('./validateName');
const validatePrice = require('./validatePrice');
const validateDescription = require('./validateDescription');
const validateCreatedAt = require('./validateCreatedAt');
const validateRating = require('./validateRating');
const validateDifficulty = require('./validateDifficulty');
const validateSignup = require('./validateSignup');

module.exports = {
    auth,
    validateName,
    validatePrice,
    validateDescription,
    validateCreatedAt,
    validateRating,
    validateDifficulty,
    validateSignup,
};
