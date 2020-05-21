// CUD measurementUnit

const MeasurementUnits = require('../models/measurementUnit');

// POST add measurementUnit /measurementUnit
exports.postMeasurementUnits = (req, res, next) => {
  console.log(req.body);
  MeasurementUnits.create({
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

//GET find MeasurementUnit
exports.findOne = (req, res, next) => {
  const Name = req.body.shortName;

  MeasurementUnits.findOne({
    where: { shortName: Name },
    truncate: true,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Measurement UNIT',
      });
    });
};

//GET findAll Measurement Units
exports.findAll = (req, res, next) => {
  MeasurementUnits.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Measurement Units',
      });
    });
};

// PUT update measurementUnit /measurementUnit
exports.putMeasurementUnit = (req, res, next) => {};

// DELETE delete measurementUnit /measurementUnit
exports.deleteMeasurementUnit = (req, res, next) => {};
