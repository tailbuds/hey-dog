const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Countries = sequelize.define(
  'countries',
  {
    countryId: {
      type: Sequelize.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'countryId',
    },
    countryName: {
      type: Sequelize.STRING(135),
      allowNull: false,
      unique: true,
      field: 'countryName',
    },
    dial: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true,
      field: 'dial',
    },
    languages: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'languages',
    },
    currencyName: {
      type: Sequelize.STRING(45),
      allowNull: false,
      field: 'currencyName',
    },
    capital: {
      type: Sequelize.STRING(135),
      allowNull: false,
      field: 'capital',
    },
    regionName: {
      type: Sequelize.STRING(135),
      allowNull: false,
      field: 'regionName',
    },
    alpha2Codes: {
      type: Sequelize.STRING(2),
      allowNull: false,
      field: 'alpha2Codes',
    },
    alpha3Codes: {
      type: Sequelize.STRING(3),
      allowNull: false,
      field: 'alpha3Codes',
    },
    numberCodes: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      field: 'numberCodes',
    },
    currencyCode: {
      type: Sequelize.STRING(5),
      allowNull: false,
      field: 'currencyCode',
    },
    minorUnits: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'minorUnits',
    },
    currencyNumericCode: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      field: 'currencyNumericCode',
    },
    countryFormalName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'countryFormalName',
    },
    countryShortName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'countryShortName',
    },
    timeZone: {
      type: Sequelize.STRING(5),
      allowNull: false,
      field: 'timeZone',
    },
  },
  { timestamps: false },
);

module.exports = Countries;
