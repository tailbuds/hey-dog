const http = require('http');
const sequelize = require('./config/database');

const server = http.createServer();

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(3500);
