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
      res.status(201).json({ measurementUnitCreated: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

//GET find MeasurementUnit
exports.getMeasurementUnit = (req, res, next) => {
  const Name = req.params.unit;
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
exports.getMeasurementUnits = (req, res, next) => {
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
exports.putMeasurementUnit = (req, res, next) => {
  const Name = req.params.unit;
  const shortName = req.body.shortName;
  const longName = req.body.longName;
  const measureSystem = req.body.measureSystem;
  MeasurementUnits.findOne({
    where: { shortName: Name },
    truncate: true,
  })
    .then((mu) => {
      mu.shortName = shortName;
      mu.longName = longName;
      mu.measureSystem = measureSystem;
      return mu.save();
    })
    .then(() => {
      res.status(201).json({ updatedMeasurementUnit: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ updatedMeasurementUnit: 0, reason: err });
    });
};

// DELETE delete measurementUnit /measurementUnit
exports.deleteMeasurementUnit = (req, res, next) => {
  const Name = req.params.unit;
  MeasurementUnits.findOne({
    where: { shortName: Name },
  })
    .then((data) => {
      data.destroy({ truncate: true, cascade: false });
    })
    .then(() => {
      res.status(200).json({ deletedCountry: 1 });
    })
    .catch((err) => {
      res.status(400).json({ deletedCountry: 0, reason: err });
    });
};
