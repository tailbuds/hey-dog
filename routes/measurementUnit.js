const path = require('path');

const express = require('express');

const router = express.Router();

const measureController = require('../controllers/measurementUnit');

// TODO: Routers
router.post('/measurement-unit', measureController.postMeasurementUnits);

module.exports = router;
