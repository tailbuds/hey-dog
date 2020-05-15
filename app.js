const http = require('http');
const sequelize = require('./config/database');

const server = http.createServer();

const breedInfo = sequelize.import('breedInfo', require('./models/breedInfo'));
const measurementUnit = sequelize.import(
  'measurementUnits',
  require('./models/measurementUnits')
);
const countries = sequelize.import('countries', require('./models/countries'));
const breedImages = sequelize.import('images', require('./models/images'));

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(3600);
