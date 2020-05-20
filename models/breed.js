const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Breed = sequelize.define('breeds', {
  breedId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'breedId',
  },
  name: {
    type: Sequelize.STRING(65),
    allowNull: false,
    unique: true,
    field: 'name',
  },
  tagline: {
    type: Sequelize.STRING(135),
    allowNull: false,
    field: 'tagline',
  },
  bgImg: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'bgImg',
  },
  puppyImg: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'puppyImg',
  },
  minLife: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    field: 'minLife',
  },
  maxLife: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    field: 'maxLife',
  },
  learningRate: {
    type: Sequelize.STRING(25),
    allowNull: false,
    field: 'learningRate',
  },
  minLitter: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    field: 'minLitter',
  },
  maxLitter: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    field: 'maxLitter',
  },
  size: {
    type: Sequelize.STRING(45),
    allowNull: false,
    field: 'size',
  },
  weightUnit: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    references: {
      model: 'measurementUnits',
      key: 'measureId',
    },
    field: 'weightUnit',
  },
  minMaleWeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'minMaleWeight',
  },
  maxMaleWeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'maxMaleWeight',
  },
  minFemaleWeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'minFemaleWeight',
  },
  maxFemaleWeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'maxFemaleWeight',
  },
  heightUnit: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    references: {
      model: 'measurementUnits',
      key: 'measureId',
    },
    field: 'heightUnit',
  },
  minMaleHeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'minMaleHeight',
  },
  maxMaleHeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'maxMaleHeight',
  },
  minFemaleHeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'minFemaleHeight',
  },
  maxFemaleHeight: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    field: 'maxFemaleHeight',
  },
  originCountry: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    references: {
      model: 'countries',
      key: 'countryId',
    },
    field: 'originCountry',
  },
  otherNames: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'otherNames',
  },
  desc1: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc1',
  },
  decs2: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'decs2',
  },
  desc3: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc3',
  },
  desc4: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc4',
  },
  desc5: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc5',
  },
  desc6: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc6',
  },
  desc7: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc7',
  },
  desc8: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc8',
  },
  desc9: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc9',
  },
  desc10: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc10',
  },
  desc11: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc11',
  },
  desc12: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc12',
  },
  desc13: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc13',
  },
  desc14: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc14',
  },
  desc15: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'desc15',
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'createdAt',
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: sequelize.literal(
      'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
    ),
    field: 'updatedAt',
  },
});

module.exports = Breed;
