const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../modles/Product');

// @route  GET api/products
// @desc   Fetch all Products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

// @route  GET api/products/:id
// @desc   Fetch single product
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) {
      res.send(product);
    } else {
      res.status(404).json({ message: 'Product Not Found' });
    }
  })
);

module.exports = router;
