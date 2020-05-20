// CRUD for breed and images

const Breed = require('../models/breed');

// POST add breed /breeds
exports.postBreed = (req, res, next) => {
  const fileInfo = req.files;
  let images = [];
  fileInfo.images.forEach((img) => {
    images.push(img.path);
  });

  // TODO: Breed.create

  // .then((result) => {

  // }).catch((err) => {

  // });;

  // TODO respond as { breedCreated: 1 } with status 201

  res.json({
    name: req.body.name,
    bgImg: fileInfo.bgImg[0].path,
    puppyImg: fileInfo.puppyImg[0].path,
    ...images,
  });
};

// GET a breed /breeds/:breedId
exports.getBreed = (req, res, next) => {};

// PUT update breed /breeds/:breedId
exports.putBreed = (req, res, next) => {};

// DELETE delete breed /breeds/:breedId
exports.deleteBreed = (req, res, next) => {};

// GET all breeds /breeds
exports.getAllBreeds = (req, res, next) => {};
