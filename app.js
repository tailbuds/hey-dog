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

<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: false }));
=======
app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> 68e83227f7b5a1497c652e7b2b26b8a8c5d27e1a
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
