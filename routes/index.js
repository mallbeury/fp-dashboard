// use .env for dev use
if (process.env.NODE_ENV != "staging" && process.env.NODE_ENV != "production") {
  require('dotenv').config();
}

const path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment-timezone');
var mysql = require('mysql');

var connectionParams = process.env.CLEARDB_DATABASE_URL;

// use .env for dev use
if (process.env.NODE_ENV != "staging" && process.env.NODE_ENV != "production") {
  connectionParams = {host:process.env.DATABASE_HOST, user:process.env.DATABASE_USER, password:process.env.DATABASE_PASSWORD, database: process.env.DATABASE_NAME, port: process.env.DATABASE_PORT}
}
connectionParams.dateStrings = 'date';
connectionParams.connectionLimit = 20;
connectionParams.waitForConnections = true;

var pool  = mysql.createPool(connectionParams);

var app = express();

var jsonParser = bodyParser.json()
var postParser = bodyParser.urlencoded({ extended: true });

module.exports = function(app) {
  app.get('/', function(req, res) {
    // render static site
    app.use(express.static(path.join(__dirname, '../client/build')));
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

  // **************************************************************************
  // EVENTS
  // **************************************************************************
  app.get('/fp-events', function(req, res) {
    let eventTime = req.query.eventTime;

    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!

      pool.query('SELECT * from event where created > ' + pool.escape(eventTime), function (err, rows, fields) {
        if (err) return;

        res.json(rows);

        connection.release();
      })
    })
  });
  app.post('/fp-webhook', postParser, function(req, res) {
    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!

      // use UTC date
      let timeNowUTC = moment().utc();
      let timeNowUTCFormatted = timeNowUTC.format('YYYY-MM-DD HH:mm:ss');

      pool.query('INSERT INTO event (created, name) VALUES (' + pool.escape(timeNowUTCFormatted) + ', ' + pool.escape(req.body.event_name) + ')', function (err, rows, fields) {
        if (err) return;

        res.json([]);

        connection.release();
      })
    })

  });
};