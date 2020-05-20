const path = require('path');

const express = require('express');

const router = express.Router();
const Countries = require('../controllers/countries');

// TODO: Routers
router.post('/add-breed', Countries.postCountry);

module.exports = router;
