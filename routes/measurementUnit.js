const express = require('express');

const measurementUnitController = require('../controllers/measurementUnit');

const router = express.Router();

const isAuth = require('../controllers/auth');

// POST /measurements
router.post(
  '/measurements',
  isAuth.headCheck,
  measurementUnitController.postMeasurementUnits,
);

// GET /measurements
router.get(
  '/measurements',
  isAuth.headCheck,
  measurementUnitController.getMeasurementUnits,
);

// GET /measurements/:unit
router.get(
  '/measurements/:unit',
  isAuth.headCheck,
  measurementUnitController.getMeasurementUnit,
);

// PUT /measurements/:unit
router.put(
  '/measurements/:unit',
  isAuth.headCheck,
  measurementUnitController.putMeasurementUnit,
);

// DELETE /measurements/:unit
router.delete(
  '/measurements/:unit',
  isAuth.headCheck,
  measurementUnitController.deleteMeasurementUnit,
);

module.exports = router;
