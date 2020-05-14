const Sequelize = require('sequelize');
const sequelize = require('./config/database');

const breedImages = sequelize.define(
  'images',
  {
    breedID: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      references: {
        model: 'breedinfo',
        key: 'breedId',
      },
    },
    img1: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img2: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img3: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img4: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img5: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img6: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img7: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img8: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
    img9: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: 'null',
    },
  },
  {
    tableName: 'images',
  }
);

module.exports = breedImages;
