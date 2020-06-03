exports.headCheck = (req, res, next) => {
  if (
    req.header('post-api-key') ||
    req.header('patch-api-key') ||
    req.header('put-api-key') ||
    req.header('delete-api-key')
  ) {
    if (req.header('post-api-key') === process.env.DEV_SECRET_KEY) {
      next();
    }

    if (req.header('patch-api-key') === process.env.DEV_SECRET_KEY) {
      next();
    }

    if (req.header('put-api-key') === process.env.DEV_SECRET_KEY) {
      next();
    }

    if (req.header('delete-api-key') === process.env.DEV_SECRET_KEY) {
      next();
    }
  } else {
    res.status(400).json({ error: secretKeyNeeded });
  }
};
