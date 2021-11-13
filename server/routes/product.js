const express = require('express');
const router = express.Router();
const Product = require('../modles/Product');

// @route  GET api/products
// @desc   Get all Products
// @access Public
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

// @route  GET api/products/:id
// @desc   Get a product
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  //const product = products.find((p) => p._id === id);
  const product = await Product.findById(id);
  res.send(product);
});
