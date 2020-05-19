// This model is used in breed controller as it is a child of breed model.

const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Images = sequelize.define(
  'images',
  {
    breedId: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'breedInfo',
        key: 'breedId',
      },
      field: 'breedID',
    },
    img1: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img1',
    },
    img2: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img2',
    },
    img3: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img3',
    },
    img4: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img4',
    },
    img5: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img5',
    },
    img6: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img6',
    },
    img7: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img7',
    },
    img8: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img8',
    },
    img9: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'img9',
    },
  },
  { timestamps: false },
);

module.exports = Images;
