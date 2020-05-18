const rootDir = require('../util/path');
const path = require('path');

const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const MeasurementUnits = require('../models/measurementUnits');

//GET Controller for "/add-breeds"
exports.getAddBreeds = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addBreed.html'));
  1;
};

//POST Controller for "/add-breeds"

exports.postAddBreeds = (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
};

// POST controller for measurement units

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
      res.json(mu).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json(err).status(400);
    });
};
