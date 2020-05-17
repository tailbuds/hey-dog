const breedInfo = sequelize.import('breedInfo', require('./models/breedInfo'));
const measurementUnit = sequelize.import(
  'measurementUnits',
  require('./models/measurementUnits')
);
const countries = sequelize.import('countries', require('./models/countries'));
const breedImages = sequelize.import('images', require('./models/images'));

const Sequelize = require('sequelize');
const sequelize = new Sequelize();

breedImages.create({
  img1: 'www.xyz.com',
});
