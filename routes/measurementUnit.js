const express = require('express');

const measurementUnitController = require('../controllers/measurementUnit');

const router = express.Router();

const isAuth = require('../controllers/auth');

// POST /measurements
router.post(
  '/measurements',
  isAuth.postHeadCheck,
  measurementUnitController.postMeasurementUnits,
);

// GET /measurements
router.get('/measurements', measurementUnitController.getMeasurementUnits);

// GET /measurements/:unit
router.get('/measurements/:unit', measurementUnitController.getMeasurementUnit);

// PUT /measurements/:unit
router.put(
  '/measurements/:unit',
  isAuth.putHeadCheck,
  measurementUnitController.putMeasurementUnit,
);

// DELETE /measurements/:unit
router.delete(
  '/measurements/:unit',
  isAuth.deleteHeadCheck,
  measurementUnitController.deleteMeasurementUnit,
);

module.exports = router;
