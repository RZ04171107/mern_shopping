const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String, // String is shorthand for  {type: String}
  description: String,
  brand: String,
  category: String,
  price: Number,
  countInStock: Number,
  rating: Number,
  numReviews: Number,
});
module.exports = mongoose.model('Product', ProductSchema);
