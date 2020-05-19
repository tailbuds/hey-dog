const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

// Models
const Breed = require('./models/breed');
const Images = require('./models/images');
const Countries = require('./models/countries');
const MeasurementUnit = require('./models/measurementUnit');

const app = express();

// TODO: Define routers

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// TODO: Setup Routers

app.use(errorController.get404);

sequelize
  .sync({ force: false })
  .then((result) => {
    console.log('Database connection established');
    return result;
  })
  .then(() => {
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });
