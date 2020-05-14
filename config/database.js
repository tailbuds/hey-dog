const Sequelize = require('sequelize');
const sequelize = new Sequelize('tailbudsbreeds', 'root', 'hanish123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
