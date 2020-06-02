exports.postHeadCheck = (req, res, next) => {
  if (!(req.header('post-api-key') === process.env.DEV_SECRET_KEY)) {
    res.status(400).json({ error: InvalidSecretKey });
  }
  next();
};

exports.putHeadCheck = (req, res, next) => {
  if (!(req.header('put-api-key') === process.env.DEV_SECRET_KEY)) {
    res.status(400).json({ error: InvalidSecretKey });
  }
  next();
};

exports.deleteHeadCheck = (req, res, next) => {
  if (!(req.header('delete-api-key') === process.env.DEV_SECRET_KEY)) {
    res.status(400).json({ error: InvalidSecretKey });
  }
  next();
};

exports.patchHeadCheck = (req, res, next) => {
  if (!(req.header('patch-api-key') === process.env.DEV_SECRET_KEY)) {
    res.status(400).json({ error: InvalidSecretKey });
  }
  next();
};
