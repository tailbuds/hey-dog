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
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err).status(400);
    });
};

// DELETE delete measurementUnit /measurementUnit
exports.deleteMeasurementUnit = (req, res, next) => {
  const Name = req.params.unit;
  MeasurementUnits.findOne({
    where: { shortName: Name },
    truncate: true,
  })
    .then((data) => {
      data.destroy();
      res.json({ Message: 'Data Deleted' });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while Deleting Measurement UNIT',
      });
    });
};
