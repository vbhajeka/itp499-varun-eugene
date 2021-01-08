const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connect to DB!');
  } catch (err) {
    console.log('Connection to DB failed');
    console.log(err.message);
    // exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
