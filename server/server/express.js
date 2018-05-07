var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , consign = require(`consign`)
    , path = require('path');

app.set('clientPath', path.join(__dirname, '../..', 'client-app/src/'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    next();
});

consign()
    .include('app/daos')
    .then('app/controllers')
    .then('app/routes')
    .into(app);

module.exports = app;