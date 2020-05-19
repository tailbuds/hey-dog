const path = require('path');

const express = require('express');

const router = express.Router();

const multer = require('multer');

const breedController = require('../controllers/breed');

// Images storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

// Images  filter
const fileFilter = (req, res, cb) => {
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

// TODO: Routers

// POST add breed /breeds
router.post('/breeds', upload.array('photos', 12), breedController.postBreed);

module.exports = router;
