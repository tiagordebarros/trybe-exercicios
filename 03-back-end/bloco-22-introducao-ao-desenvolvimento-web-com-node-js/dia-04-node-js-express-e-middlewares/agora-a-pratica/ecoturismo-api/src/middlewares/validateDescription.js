const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const { rating, difficulty, createdAt } = description;

  if (!description) {
    return res.status(400).json({ message: 'O campo description é obrigatório' });
  }
  if (!rating) {
    return res.status(400).json({ message: 'O campo rating é obrigatório' });
  }
  if (!difficulty) {
    return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  }
  if (!createdAt) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  }
  return next();
};

module.exports = validateDescription;
