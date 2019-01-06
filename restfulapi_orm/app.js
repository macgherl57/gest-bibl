const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const PORT = 3000;
const HOST = 'localhost';
const bodyParser = require('body-parser');
var db = require('./config/db.config.js');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
require('./route/schedario.route.js')(app);
require('./route/secrets.route.js')(app);
// server = https.createServer(https_options, app).listen(PORT, HOST);
app.listen(3000);
console.log('HTTP server listening on %s:%s', HOST, PORT);
