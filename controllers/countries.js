// CRUD countries

const Countries = require('../models/countries');

// POST add country /countries
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
      res.status(201).json({ createdCountry: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ createdCountry: 0, reason: err });
    });
};

// GET all countries /countries
exports.getCountries = (req, res, next) => {
  Countries.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving Country',
      });
    });
};

// Get a country by name /countries/:countryName
exports.getCountryDetails = (req, res, next) => {
  const Name = req.params.countryName;
  Countries.findOne({
    where: { countryName: Name },
    truncate: true,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({
        message:
          err.message ||
          'Some error occurred while retrieving Country= ' + countryName,
      });
    });
};

// PUT update Countries Details /countries/:countryName
exports.putCountry = (req, res, next) => {
  const Name = req.params.countryName;
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
  Countries.findOne({
    where: { countryName: Name },
  })
    .then((country) => {
      country.countryName = countryName;
      country.dialCode = dialCode;
      country.currencyName = currencyName;
      country.capital = capital;
      country.regionName = regionName;
      country.alpha2Code = alpha2Code;
      country.alpha3Code = alpha3Code;
      country.currencyCode = currencyCode;
      country.minorUnits = minorUnits;
      country.timeZone = timeZone;
      return country.save();
    })
    .then(() => {
      res.status(201).json({ updatedCountry: 1 });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ updatedCountry: 0, reason: err });
    });
};

// DELETE delete Countries Details /countries/:countryName
exports.deleteCountryDetails = (req, res, next) => {
  const Name = req.params.countryName;
  Countries.destroy({
    where: { countryName: Name },
    cascade: true,
  })
    .then(() => {
      res.status(200).json({ deletedCountry: 1 });
    })
    .catch((err) => {
      res.status(400).json({ deletedCountry: 0, reason: err });
    });
};
