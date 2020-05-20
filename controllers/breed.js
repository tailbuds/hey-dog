// CRUD for breed and images

const Breed = require('../models/breed');

// POST add breed /breeds
exports.postBreed = (req, res, next) => {
  console.log(req);
  res.json(req.body.name, req.file.puppyImg);
};

// GET a breed /breeds/:breedId
exports.getBreed = (req, res, next) => {};

// PUT update breed /breeds/:breedId
exports.putBreed = (req, res, next) => {};

// DELETE delete breed /breeds/:breedId
exports.deleteBreed = (req, res, next) => {};

// GET all breeds /breeds
exports.getAllBreeds = (req, res, next) => {};
