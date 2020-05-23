const express = require('express');

const router = express.Router();

const multer = require('multer');

const breedController = require('../controllers/breed');

// Images storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') +
        file.originalname.replace(/ /g, '+'),
    );
  },
});

// Images  filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// initializing multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// POST add breed /breeds
router.post(
  '/breeds',
  upload.fields([
    { name: 'bgImg', maxCount: 1 },
    { name: 'puppyImg', maxCount: 1 },
    { name: 'images', maxCount: 9 },
  ]),
  breedController.postBreed,
);

// GET get all breeds /breeds
router.get('/breeds', breedController.getAllBreeds);

// GET a breed /breed/:breedId
router.get('/breeds/:breedId', breedController.getBreed);

// PATCH a breed /breeds/:breedId?edit=<information|backgroundImage|puppyImage|img1|img2|img3|img4|img5|img6|img7|img8|img9>
router.patch(
  '/breeds/:breedId',
  upload.fields([
    { name: 'bgImg', maxCount: 1 },
    { name: 'puppyImg', maxCount: 1 },
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 },
    { name: 'img5', maxCount: 1 },
    { name: 'img6', maxCount: 1 },
    { name: 'img7', maxCount: 1 },
    { name: 'img8', maxCount: 1 },
    { name: 'img9', maxCount: 1 },
  ]),
  breedController.patchBreed,
);

// DELETE delete a breed /breed/:breedId
router.delete('/breeds/:breedId', breedController.deleteBreed);

module.exports = router;
