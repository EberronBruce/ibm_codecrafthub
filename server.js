// server.js
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});


// .env (example content)
// MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/userdb?retryWrites=true&w=majority
// JWT_SECRET=your_jwt_secret_key
// PORT=5000