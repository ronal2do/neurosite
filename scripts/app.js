const express     = require('express');
const http       = require('http');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const cors        = require('cors');
const validator   = require('express-validator');
const path        = require('path');
// fire up express
const app = express();
const server     = http.createServer(app);
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// middlewares
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//validator
app.use(validator());
// cors
app.use(cors());


// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
