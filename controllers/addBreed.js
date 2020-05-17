const rootDir = require('../util/path');
const path = require('path');

//GET Controller for "/add-breeds"
exports.getAddBreeds = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addBreed.html'));
  1;
};

//POST Controller for "/add-breeds"

exports.postAddBreeds = (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
};
