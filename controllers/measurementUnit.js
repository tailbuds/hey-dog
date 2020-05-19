// CUD measurementUnit

const MeasurementUnits = require('../models/measurementUnits');

// POST add measurementUnit /measurementUnit
exports.postMeasurementUnits = (req, res, next) => {
  console.log(req.body);
  MeasurementUnits.create({
    measureId: req.body.measureId,
    shortName: req.body.shortName,
    longName: req.body.longName,
    measureSystem: req.body.measureSystem,
  })
    .then((mu) => {
      console.log('created measurement unit');
      res.json({ measurementUnitCreated: 1 }).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json(err).status(400);
    });
};

// PUT update measurementUnit /measurementUnit
exports.putMeasurementUnit = (req, res, next) => {};

// DELETE delete measurementUnit /measurementUnit
exports.deleteMeasurementUnit = (req, res, next) => {};
