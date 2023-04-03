const express = require('express');

const app = express();
const mongoose = require('mongoose');

const router = require('./router');
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public/'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(router);

mongoose.connect('mongodb://localhost:27017/maBaseDeDonnees', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données'));
db.once('open', () => {
  console.log('Connexion réussie à la base de données');
});

const start = () => {
    app.listen(port, () => console.log(`App running on http://localhost:${port}`));
};

module.exports = { start };