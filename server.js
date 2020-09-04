var express = require('express');
var cors = require('cors')
var routes = require('./routes/index.js');
var app = express();

// use .env for dev use
if (process.env.NODE_ENV != "staging" && process.env.NODE_ENV != "production") {
  require('dotenv').config();
}

app.use(cors());

const PORT = process.env.PORT || 8000;

routes(app);

app.listen(PORT, () => console.log('Listening on ' + PORT));
