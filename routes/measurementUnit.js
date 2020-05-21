const path = require('path');

const express = require('express');

const router = express.Router();

const measurementUnitController = require('../controllers/measurementUnit');

// TODO: Routers
router.post(
  '/measurement-unit',
  measurementUnitController.postMeasurementUnits,
);
router.get('/measurement-unit/:unit', measurementUnitController.findOne);
router.get('/measurement-unit', measurementUnitController.findAll);
router.post(
  '/measurement-unit',
  measurementUnitController.postMeasurementUnits,
);

module.exports = router;
