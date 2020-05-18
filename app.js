//Required Node Modules
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//---------------
//Local Required File
const sequelize = require('./config/database');
const addBreed = require('./routes/addBreeds');

//----------------

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//end

let corsOptions = {
  origin: 'http://localhost:3600',
};

//CRUD API's for breedInfo DB

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(addBreed);

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TailBuds.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
