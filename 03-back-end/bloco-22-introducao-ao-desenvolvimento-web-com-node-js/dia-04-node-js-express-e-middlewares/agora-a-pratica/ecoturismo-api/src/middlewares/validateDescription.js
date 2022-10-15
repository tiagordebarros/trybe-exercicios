const validateDescriptionMessage = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `O campo ${value} é obrigatório` });
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  return validateDescriptionMessage(description, res, 'description')
  || validateDescriptionMessage(description.rating, res, 'rating')
  || validateDescriptionMessage(description.difficulty, res, 'difficulty')
  || validateDescriptionMessage(description.createdAt, res, 'createdAt')
  || next();
};

module.exports = validateDescription;
