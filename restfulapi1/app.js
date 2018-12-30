const fs = require('fs');
//const https = require('https');
const express = require('express');
const app = express();
const PORT = 3000;
//const HOST = 'liceoberchet.gov.it';
const HOST = 'localhost'
/*
let key = fs.readFileSync('./key.pem');
let cert = fs.readFileSync('./cert.pem');
let https_options = {
    key: key,
    cert: cert
};
*/
const bodyParser = require('body-parser');
var db = require('./db');
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
app.use('/biblioteca', require('./controllers/biblioteca'));
app.use('/secrets', require('./controllers/secrets'));
db.connect(function(err) {
        if (err) {
            console.log('Not connected to DB');
            process.exit(1);
        }
});
// server = https.createServer(https_options, app).listen(PORT, HOST);
app.listen(PORT);
console.log('HTTP server listening on %s:%s', HOST, PORT);
