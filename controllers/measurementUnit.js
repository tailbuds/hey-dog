// CRUD measurementUnit

const MeasurementUnits = require('../models/measurementUnit');

// POST add measurementUnit /measurements
exports.postMeasurementUnits = (req, res, next) => {
  console.log(req.body);
  MeasurementUnits.create({
    shortName: req.body.shortName,
    longName: req.body.longName,
    category: req.body.category,
    measureSystem: req.body.measureSystem,
  })
    .then((mu) => {
      console.log('created measurement unit');
      res.status(201).json({ createdMeasurementUnit: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ createdMeasurementUnit: 0, reason: err });
    });
};

//GET findAll Measurement Units /measurements
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

//GET find a MeasurementUnit /measurements/:unit
exports.getMeasurementUnit = (req, res, next) => {
  const Name = req.params.unit;
  MeasurementUnits.findOne({
    where: { shortName: Name },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message ||
          'Some error occurred while retrieving Measurement unit',
      });
    });
};

// PUT update measurementUnit /measurementUnit/:unit
exports.putMeasurementUnit = (req, res, next) => {
  const name = req.params.unit;
  MeasurementUnits.update(
    {
      shortName: req.body.shortName,
      longName: req.body.longName,
      category: req.body.category,
      measureSystem: req.body.measureSystem,
    },
    {
      where: { shortName: name },
    },
  )
    .then(() => {
      res.status(201).json({ updatedMeasurementUnit: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ updatedMeasurementUnit: 0, reason: err });
    });
};

// DELETE delete measurementUnit /measurements/:unit
exports.deleteMeasurementUnit = (req, res, next) => {
  const Name = req.params.unit;
  MeasurementUnits.destroy({
    where: { shortName: Name },
  })
    .then(() => {
      res.status(200).json({ deletedMeasurementUnit: 1 });
    })
    .catch((err) => {
      res.status(400).json({ deletedMeasurementUnit: 0, reason: err });
    });
};
