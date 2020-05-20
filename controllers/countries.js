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

//Find Counrty by countryName

exports.findAll = (req, res, next) => {
  const countryName = req.body.countryName;
  var condition = countryName
    ? { countryName: { [Op.like]: `%${countryName}%` } }
    : null;
  Countries.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Country= ' + countryName,
      });
    });
};

//----------

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
  var condition = countryName
    ? { countryName: { [Op.like]: `%${countryName}%` } }
    : null;
  Countries.update(
    {
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
    },
    { where: condition },
  )
    .then(() => {
      res.json({ countryUpdated: 1 }).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json(err).status(400);
    });
};

// DELETE delete country /countries/:countryName
exports.deleteCountry = (req, res, next) => {
  const { countryName } = req.body;
};
