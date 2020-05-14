const Sequelize = require('sequelize');
const sequelize = require('./config/database');

const breedInfo = sequelize.define(
  'breedinfo',
  {
    breedId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(65),
      allowNull: false,
      comment: 'null',
      unique: true,
    },
    tagline: {
      type: Sequelize.STRING(135),
      allowNull: false,
      comment: 'null',
    },
    bgImg: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: 'null',
    },
    puppyImg: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: 'null',
    },
    minLife: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    maxLife: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    learningRate: {
      type: Sequelize.STRING(25),
      allowNull: false,
      comment: 'null',
    },
    minLitter: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    maxLitter: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    size: {
      type: Sequelize.STRING(45),
      allowNull: false,
      comment: 'null',
    },
    weightUnit: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
      references: {
        model: 'measurementunits',
        key: 'measureId',
      },
    },
    minMaleWeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    maxMaleWeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    minFemaleWeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    maxFemaleWeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    heightUnit: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
      references: {
        model: 'measurementunits',
        key: 'measureId',
      },
    },
    minMaleHeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    maxMaleHeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    minFemaleHeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    maxFemaleHeight: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
    },
    originCountry: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      comment: 'null',
      references: {
        model: 'countries',
        key: 'countryId',
      },
    },
    otherNames: {
      type: Sequelize.STRING(255),
      allowNull: true,
      comment: 'null',
    },
    desc1: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    decs2: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc3: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc4: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc5: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc6: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc7: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc8: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc9: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc10: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc11: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc12: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc13: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc14: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    desc15: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    createdOn: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: 'null',
    },
    updatedOn: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: 'null',
    },
  },
  {
    tableName: 'breedinfo',
  }
);

module.exports = breedInfo;
