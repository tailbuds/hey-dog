const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const countires = sequelize.define('countries', {
  countryId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
  },
  countryName: {
    type: Sequelize.STRING(135),
    allowNull: false,
    comment: 'null',
    unique: true,
  },
  dial: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    comment: 'null',
    unique: true,
  },
  languages: {
    type: Sequelize.TEXT,
    allowNull: true,
    comment: 'null',
  },
  currencyName: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'null',
  },
  capital: {
    type: Sequelize.STRING(135),
    allowNull: false,
    comment: 'null',
  },
  regionName: {
    type: Sequelize.STRING(135),
    allowNull: false,
    comment: 'null',
  },
  alpha2Codes: {
    type: Sequelize.STRING(2),
    allowNull: false,
    comment: 'null',
  },
  alpha3Codes: {
    type: Sequelize.STRING(3),
    allowNull: false,
    comment: 'null',
  },
  numberCodes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: 'null',
  },
  currencyCode: {
    type: Sequelize.STRING(5),
    allowNull: false,
    comment: 'null',
  },
  minorUnits: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    comment: 'null',
  },
  currencyNumericCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: 'null',
  },
  countryFormalName: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: 'null',
  },
  countryShortName: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: 'null',
  },
  timeZone: {
    type: Sequelize.STRING(5),
    allowNull: false,
    comment: 'null',
  },
});

module.exports = countries;
