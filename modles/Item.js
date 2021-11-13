const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  body_location: {
    type: String,
  },
});

module.exports = mongoose.model('Item', ItemSchema);
