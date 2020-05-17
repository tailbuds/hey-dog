const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');
//GETroute for "/add-breeds"
router.get('/add-breeds', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addBreed.html'));
  1;
});

//POSTroute for "/add-breeds"
router.post('/add-breeds', (req, res, next) => {
  console.log(res.body);
  res.redirect('/');
});

module.exports = router;
