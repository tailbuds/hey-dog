const Sequelize = require('sequelize');
const sequelize = require('./config/database');

const measurementUnits = sequelize.define(
  'measurementunits',
  {
    measureId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'null',
    },
    shortName: {
      type: Sequelize.STRING(3),
      allowNull: false,
      comment: 'null',
      unique: true,
    },
    longName: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: 'null',
      unique: true,
    },
    measureSystem: {
      type: Sequelize.STRING(135),
      allowNull: false,
      comment: 'null',
    },
  },
  {
    tableName: 'measurementunits',
  }
);

module.exports = measurementUnits;
