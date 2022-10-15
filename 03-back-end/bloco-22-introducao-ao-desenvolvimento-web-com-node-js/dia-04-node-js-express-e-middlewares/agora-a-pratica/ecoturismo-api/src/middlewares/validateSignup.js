const validateSignup = (req, res, next) => {
  const requiredFields = ['email', 'password', 'firstName', 'phone'];
  if (!requiredFields.every((field) => field in req.body)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  return next();
};

module.exports = validateSignup;
