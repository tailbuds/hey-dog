//Required Node Modules
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//---------------
//Local Required File
const sequelize = require('./config/database');
const addBreed = require('./routes/addBreeds');
//----------------

//To Create Models from our Database
// const breedInfo = sequelize.import('breedInfo', require('./models/breedInfo'));
// const measurementUnit = sequelize.import(
//   'measurementUnits',
//   require('./models/measurementUnits')
// );
// const countries = sequelize.import('countries', require('./models/countries'));
// const breedImages = sequelize.import('images', require('./models/images'));

// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//end

const server = http.createServer();

let corsOptions = {
  origin: 'http://localhost:3600',
};

//CRUD API's for breedInfo DB

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(addBreed);

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TailBuds.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
