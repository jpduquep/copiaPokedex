const pokeneaService = require('../services/pokeneaService');

exports.getRandomPokeneaInfo = (req, res) => {
    const pokeneaInfo = pokeneaService.getRandomPokeneaInfo();
    res.json(pokeneaInfo);
};

/*
exports.getRandomPokeneaImageAndQuote = (req, res) => {
    const pokeneaInfo = pokeneaService.getRandomPokeneaImageAndQuote();

    res.send(pokeneaImageAndQuote);
};
*/

exports.showPokedex = (req, res) => {
    const pokeneaInfo = pokeneaService.getRandomPokeneaInfo();
    res.render('index', { pokenea: pokeneaInfo });
};
