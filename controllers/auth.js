//Enviroment Check
let SECRET_KEY;

if (process.env.NODE_ENV === 'development') {
  SECRET_KEY = process.env.DEV_SECRET_KEY;
}
if (process.env.NODE_ENV === 'test') {
  SECRET_KEY = process.env.TEST_SECRET_KEY;
}
if (process.env.NODE_ENV === 'production') {
  SECRET_KEY = process.env.PROD_SECRET_KEY;
}

exports.headCheck = (req, res, next) => {
  if (!req.header('x-api-key')) {
    return res.status(400).json({ error: secretKeyNeeded });
  }
  if (req.header('x-api-key') !== SECRET_KEY) {
    return res.status(404).json({ error: secretKeyWrong });
  } 
  next();
};
