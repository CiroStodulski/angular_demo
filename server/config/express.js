var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , consign = require(`consign`)
    , path = require('path');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
    .include('app')
    .into(app);

module.exports = app;