const express = require('express')
const pokeNeaRoutes = require('./src/routes/pokeneaRoutes');
const pokeNeaApiRoutes = require('./src/routes/pokeneaApiRoutes');
const app = express()
const port = 80
const path = require('path');
/*
const phrases = [
    "Get ready to be inspired…",
    "See rejection as redirection.",
    "There is beauty in simplicity.",
    "You can’t be late until you show up.",
    "Maybe life is testing you. Don’t give up.",
    "Impossible is just an opinion.",
    "Alone or not you gonna walk forward.",
]
*/

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use('/api', pokeNeaApiRoutes);
app.use('/', pokeNeaRoutes)

/*
app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    res.send(phrases[number])
})
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})