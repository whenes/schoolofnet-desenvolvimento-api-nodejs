const mongoose = require('mongoose');

const Shopping = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  }]
});

module.exports = mongoose.model('Shopping', Shopping);