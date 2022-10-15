const validateDifficulty = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  const level = ['Fácil', 'Médio', 'Difícil'];
  if (!level.includes(difficulty)) {
    res.status(400)
     .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  return next();
};

module.exports = validateDifficulty;
