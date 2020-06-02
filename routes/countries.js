const express = require('express');

const countriesController = require('../controllers/countries');

const router = express.Router();

const isAuth = require('../controllers/auth');

// POST /countries
router.post('/countries', isAuth.headCheck, countriesController.postCountry);

// GET /countries
router.get('/countries', countriesController.getCountries);

// GET /countries/:countryName
router.get(
  '/countries/:countryName',

  countriesController.getCountryDetails,
);

// PUT /countries/:countryName
router.put(
  '/countries/:countryName',
  isAuth.headCheck,
  countriesController.putCountry,
);

// DELETE /countries/:countryName
router.delete(
  '/countries/:countryName',
  isAuth.headCheck,
  countriesController.deleteCountryDetails,
);

module.exports = router;
