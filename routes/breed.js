const path = require('path');

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
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});

// Images  filter
// const fileFilter = (req, res, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// initializing multer
const upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
});

// ? Paste your code here...

// TODO: Routers

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

module.exports = router;
