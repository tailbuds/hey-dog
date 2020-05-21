const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./config/database');

// Models
const Breed = require('./models/breed');
const Images = require('./models/images');
const Countries = require('./models/countries');
const MeasurementUnit = require('./models/measurementUnit');

const app = express();

// TODO: Define routers
const breedRoute = require('./routes/breed');
const countriesRoute = require('./routes/countries');
const measurementUnitRoute = require('./routes/measurementUnit');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'images')));

// TODO: Setup Routers

app.use(breedRoute);
app.use(countriesRoute);
app.use(measurementUnitRoute);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    console.log('Database connection established');
    return result;
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
