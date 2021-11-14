const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const connectDB = require('./config/db');
const productRoutes = require('./routes/product');
const dotenv = require('dotenv');
dotenv.config();
connectDB();

// Bodyparser Middleware
app.use(bodyParser.json());

// use Routes
// app.use('/api/items', items);
app.use('/api/products', productRoutes);

app.get('/test', (req, res) => {
  res.send('API is running...');
});

// app.get('/api/products', (req, res) => {
//   res.send(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   const { id } = req.params;
//   const product = products.find((p) => p._id === id);
//   res.send(product);
// });

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
);
