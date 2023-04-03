const express = require('express');

const app = express();
const router = require('./router');
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/../public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(router);

const start = () => {
    app.listen(port, () => console.log(`App running on http://localhost:${port}`));
};

module.exports = { start };