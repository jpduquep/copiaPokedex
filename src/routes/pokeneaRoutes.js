const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');


router.get('/pokenea/pokeneaCard', pokeneaController.showPokedex);

module.exports = router;
