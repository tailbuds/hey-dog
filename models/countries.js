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
    dialCode: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true,
      field: 'dialCode',
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
    alpha2Code: {
      type: Sequelize.STRING(2),
      allowNull: false,
      field: 'alpha2Code',
    },
    alpha3Code: {
      type: Sequelize.STRING(3),
      allowNull: false,
      field: 'alpha3Code',
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
    timeZone: {
      type: Sequelize.STRING(5),
      allowNull: false,
      field: 'timeZone',
    },
  },
  { timestamps: false },
);

module.exports = Countries;
