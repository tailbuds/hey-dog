//Required Node Modules
const express = require('express');
const router = express.Router();

//Required Local Modules
const addBreeds = require('../controllers/addBreed');

//GETroute for "/add-breeds"
router.get('/add-breeds', addBreeds.getAddBreeds);
//POSTroute for "/add-breeds"
router.post('/add-breeds', addBreeds.postAddBreeds);

module.exports = router;
