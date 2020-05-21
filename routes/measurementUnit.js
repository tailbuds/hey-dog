const path = require('path');

const express = require('express');

const router = express.Router();

const measureController = require('../controllers/measurementUnit');

// TODO: Routers
<<<<<<< HEAD
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
=======
router.post('/measurement-unit', measureController.postMeasurementUnits);
>>>>>>> 68e83227f7b5a1497c652e7b2b26b8a8c5d27e1a

module.exports = router;
