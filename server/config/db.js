// A simple version in server.js
// DB Config
// const db = process.env.MONGO_URI;
// Connect to Mongo
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB connected!'))
//   .catch((err) => console.log(err));

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
