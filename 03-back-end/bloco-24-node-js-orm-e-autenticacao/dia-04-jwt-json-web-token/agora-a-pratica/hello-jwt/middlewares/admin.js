module.exports = (req, res, next) => {
  const { admin } = req.user;
  
  if (!req.user) {
    const err = new Error('This endpoint requires authentication');
    err.statusCode = 401;
    return next(err);
  }

  if (!admin) {
    return res.status(401).json({ error: { message: 'Restricted access' } });
  }

  return next();
};
