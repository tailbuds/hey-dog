const http = require('http');
const dbConfig = require('./config/dbConfig');

const AutoSequelize = require('sequelize-auto');
const autoSequelize = new AutoSequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  }
);

const server = http.createServer(() => {
  console.log('hey im wokring');
});

autoSequelize.run((err) => {
  if (err) throw err;
  console.log(autoSequelize.tables);
});

server.listen(3500);
