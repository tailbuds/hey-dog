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

// PUT update country /countries/:countryName
exports.putCountry = (req, res, next) => {
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
};

// DELETE delete country /countries/:countryName
exports.deleteCountry = (req, res, next) => {
  const { countryName } = req.body;
};
