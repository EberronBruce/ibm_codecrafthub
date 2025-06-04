// config/db.js
const mongoose = require('mongoose');

/**
 * Connect to MongoDB using MONGO_URI from environment variables
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;