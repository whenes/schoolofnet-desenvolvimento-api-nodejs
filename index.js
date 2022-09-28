const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//database
mongoose.connect('mongodb://localhost:27017/ecommerce');
const mongoDb = mongoose.connection;
mongoDb.on('error', function() {
  console.log('MongoDB error');
});
mongoDb.once('open', function() {
  console.log('MongoDB has been connected');
});

//rotas
require('./routes')(app);

server.listen(3000, () => {
  console.log('Express has been started on port 3000');
});