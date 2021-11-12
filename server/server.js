const express = require('express');
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const app = express();

// const items = require('../routes/items');

// // Bodyparser Middleware
// app.use(bodyParser.json());

// // DB Config
// const db = require('../config/keys').mongoURI;

// // Connect to Mongo
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB connected!'))
//   .catch((err) => console.log(err));

// // use Routes
// app.use('/api/items', items);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
