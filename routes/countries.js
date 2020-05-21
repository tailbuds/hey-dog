const path = require('path');

const express = require('express');

const router = express.Router();
const countriesController = require('../controllers/countries');

// TODO: Routers
router.get('/countries/:countryName', countriesController.findOne);
router.get('/countries', countriesController.findAll);
router.put('/countries/:countryName', countriesController.putMeasurementUnit);
router.post('/countries', countriesController.postCountry);
module.exports = router;
