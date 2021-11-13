const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: String, // String is shorthand for  {type: String}
    description: String,
    brand: String,
    category: String,
    price: {
      type: Number,
      required: true,
      defaule: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      defaule: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [ReviewSchema],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Product', ProductSchema);
