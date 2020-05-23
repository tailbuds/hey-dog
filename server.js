// * Importing packages
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// * Importing environment variable
require('dotenv').config();

let HOST;
let PORT;
if (process.env.NODE_ENV === 'development') {
  HOST = process.env.DEV_APP_HOST;
  PORT = process.env.DEV_APP_PORT;
}
if (process.env.NODE_ENV === 'test') {
  HOST = process.env.TEST_APP_HOST;
  PORT = process.env.TEST_APP_PORT;
}
if (process.env.NODE_ENV === 'production') {
  HOST = process.env.PROD_APP_HOST;
  PORT = process.env.PROD_APP_PORT;
}

// * Importing database config
const sequelize = require('./config/database');

// * Importing models
const Breed = require('./models/breed');
const Images = require('./models/images');
const Countries = require('./models/countries');
const MeasurementUnit = require('./models/measurementUnit');

// * importing routers
const breedRoute = require('./routes/breed');
const countriesRoute = require('./routes/countries');
const measurementUnitRoute = require('./routes/measurementUnit');

// * importing controllers
const errorController = require('./controllers/error');

// * Initializing express app
const app = express();

// * Logging middleware
app.use(morgan('dev'));

// * CORS headers setter
app.use(cors());

// * Make images folder publicly accessible
app.use('/images', express.static(path.join(__dirname, 'images')));

// * express body-parser settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// * Breeds Route
app.use(breedRoute);

// * Countries Route
app.use(countriesRoute);

// * MeasurementUnits Route
app.use(measurementUnitRoute);

// * Error Route
app.use(errorController.get404);

// * Defining SQL relationships

// breed to images
Breed.hasOne(Images, {
  constraints: true,
  onDelete: 'CASCADE',
  as: 'BreedImages',
  key: 'breedId',
  foreignKey: 'breedId',
});
// images to breed
Images.belongsTo(Breed, {
  as: 'BreedImages',
  key: 'breedId',
  foreignKey: 'breedId',
});

// countries to breeds
Countries.hasMany(Breed, {
  constraints: true,
  onDelete: 'CASCADE',
  as: 'BreedCountry',
  key: 'countryId',
  foreignKey: 'originCountry',
});
// breeds to countries
Breed.belongsTo(Countries, {
  as: 'BreedCountry',
  key: 'countryId',
  foreignKey: 'originCountry',
});

// measurementUnit to breed on weightUnit column
MeasurementUnit.hasMany(Breed, {
  constraints: true,
  onDelete: 'CASCADE',
  as: 'BreedWeight',
  key: 'measureId',
  foreignKey: 'weightUnit',
});
// measurementUnit to breed on HeightUnit column
MeasurementUnit.hasMany(Breed, {
  constraints: true,
  onDelete: 'CASCADE',
  as: 'BreedHeight',
  key: 'measureId',
  foreignKey: 'heightUnit',
});

// breed to measurementUnit on weightUnit column
Breed.belongsTo(MeasurementUnit, {
  as: 'BreedWeight',
  foreignKey: 'weightUnit',
  key: 'measureId',
});
// breed to measurementUnit on heightUnit column
Breed.belongsTo(MeasurementUnit, {
  as: 'BreedHeight',
  foreignKey: 'heightUnit',
  key: 'measureId',
});

// * Initialize sequelize and start service
sequelize
  .sync({ force: process.env.RECREATE_DB })
  .then((result) => {
    console.log('Database connection established');
    return result;
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
