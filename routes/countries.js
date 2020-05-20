const path = require('path');

const express = require('express');

const router = express.Router();
const countriesController = require('../controllers/countries');

// TODO: Routers
router.post('/findcountries', countriesController.findOne);
router.post('/countries', countriesController.postCountry);

module.exports = router;
