const express = require('express');

const measurementUnitController = require('../controllers/measurementUnit');

const router = express.Router();

// POST /measurements
router.post('/measurements', measurementUnitController.postMeasurementUnits);

// GET /measurements
router.get('/measurements', measurementUnitController.getMeasurementUnits);

// PUT /measurements/:unit
router.put('/measurements/:unit', measurementUnitController.putMeasurementUnit);

// GET /measurements/:unit
router.get('/measurements/:unit', measurementUnitController.getMeasurementUnit);

// DELETE /measurements/:unit
router.delete(
  '/measurements/:unit',
  measurementUnitController.deleteMeasurementUnit,
);

module.exports = router;
