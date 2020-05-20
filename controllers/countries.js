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

//Find Country by countryName

exports.findOne = (req, res, next) => {
  const countryName = req.body.countryName;
  const condition = countryName
    ? { countryName: { [Op.like]: `%${countryName}%` } }
    : null;
  Countries.findOne({ where: condition })
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
  const condition = countryName
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
  const countryName = req.body.countryName;

  const condition = countryName
    ? { countryName: { [Op.like]: `%${countryName}%` } }
    : null;

  Countries.destroy({ where: condition })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Country Details Deleted Succesfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Country Detail of ${countryName}. Maybe Country Details was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Country Details of ' + countryName,
      });
    });
};
