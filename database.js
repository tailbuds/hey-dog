const Sequelize = require('sequelize');
const sequelize = require('./config/dbConfig');

const product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
});

module.exports = product;
