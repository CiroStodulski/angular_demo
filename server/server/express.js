var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , consign = require(`consign`)
    , path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

consign()
    .include('app/daos')
    .then('app/controllers')
    .then('app/routes')
    .into(app);

module.exports = app;