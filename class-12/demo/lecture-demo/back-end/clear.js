const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Dog = require('./Model/dog');

async function clear() {
  try {
    await Dog.deleteMany({});
    console.log('Dogs cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();