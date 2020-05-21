// CUD countries

const Countries = require('../models/countries');

// POST add country /countries/:countryId
exports.postCountry = (req, res, next) => {
  const {
    countryName,
    dialCode,
    currencyName,
    capital,
    regionName,
    alpha2Code,
    alpha3Code,
    currencyCode,
    minorUnits,
    timeZone,
  } = req.body;
  Countries.create({
    countryName: countryName,
    dialCode: dialCode,
    currencyName: currencyName,
    capital: capital,
    regionName: regionName,
    alpha2Code: alpha2Code,
    alpha3Code: alpha3Code,
    currencyCode: currencyCode,
    minorUnits: minorUnits,
    timeZone: timeZone,
  })
    .then(() => {
      res.json({ countryCreated: 1 }).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json(err).status(400);
    });
};

//Fetch all Country

exports.findAll = (req, res, next) => {
  Countries.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Country',
      });
    });
};

//Find Country by countryName

exports.findOne = (req, res, next) => {
  const Name = req.params.countryName;
  Countries.findOne({
    where: { countryName: Name },
    truncate: true,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Country= ' + countryName,
      });
    });
};

// PUT update Countries Details
exports.putMeasurementUnit = (req, res, next) => {};

// DELETE delete Countries Details
exports.deleteMeasurementUnit = (req, res, next) => {};
