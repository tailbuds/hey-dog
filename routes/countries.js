const express = require('express');

const countriesController = require('../controllers/countries');

const router = express.Router();

// POST /countries
router.post('/countries', countriesController.postCountry);

// GET /countries
router.get('/countries', countriesController.getCountries);

// GET /countries/:countryName
router.get('/countries/:countryName', countriesController.getCountryDetails);

// PUT /countries/:countryName
router.put('/countries/:countryName', countriesController.putCountry);

// DELETE /countries/:countryName
router.delete(
  '/countries/:countryName',
  countriesController.deleteCountryDetails,
);

module.exports = router;
