const mongoose = require('mongoose');
const db = `mongodb+srv://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PWD,
      retryWrites: true,
      w: 'majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to DB!');
  } catch (err) {
    console.log('Connection to DB failed');
    console.log(err.message);
    // exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
