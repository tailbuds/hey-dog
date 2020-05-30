exports.headCheck = (req, res, next) => {
  if (!(req.header('authorization') === process.env.DEV_SECRET_KEY)) {
    res.status(400).json({ error: InvalidSecretKey });
  }
  next();
};
