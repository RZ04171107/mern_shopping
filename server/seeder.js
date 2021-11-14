const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./modles/User');
const Product = require('./modles/Product');
const Order = require('./modles/Order');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.log(error, 'IMPORT ERROR');
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.log(error, 'DESTORY ERROR');
    process.exit(1);
  }
};

//node server/seeder -d
if (process.argv[2] === '-d') {
  destoryData();
} else if (process.argv[2] === '-i') {
  //node server/seeder -i
  importData();
} else {
  console.log('Plz check the command');
}
