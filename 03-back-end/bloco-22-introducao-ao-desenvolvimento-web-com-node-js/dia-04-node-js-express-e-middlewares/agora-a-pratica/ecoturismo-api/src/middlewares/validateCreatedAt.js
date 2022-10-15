const validateCreatedAt = (req, res, next) => {
  const { description: { createdAt } } = req.body;
  const dateValidate = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  if (!dateValidate.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  return next();
};

module.exports = validateCreatedAt;
