const Sequelize = require('sequelize');
const sequelize = new Sequelize('tailbudsTest', 'hanish', 'Hanish,123', {
  host: 'raynemani.ml',
  dialect: 'mysql',
});

module.exports = sequelize;
