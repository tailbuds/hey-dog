const http = require('http');
const sequelize = require('./config/database');

const server = http.createServer();

const breedInfo = sequelize.import('breedInfo', require('./models/breedinfo'));
const measurementUnit = sequelize.import(
  'measurementunits',
  require('./models/measurementunits')
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

server.listen(3500);
