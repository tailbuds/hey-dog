const path = require('path');

const express = require('express');

const router = express.Router();

const measurementUnitController = require('../controllers/measurementUnit');

// TODO: Routers

router.get('/measurement-unit/:unit', measurementUnitController.findOne);
router.get('/measurement-unit', measurementUnitController.findAll);
router.put(
  '/measurement-unit/:unit',
  measurementUnitController.putMeasurementUnit,
);
router.post(
  '/measurement-unit',
  measurementUnitController.postMeasurementUnits,
);

module.exports = router;
