// app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

// Mount user routes
app.use('/api/users', userRoutes);

// Error handler (last middleware)
app.use(errorHandler);

module.exports = app;