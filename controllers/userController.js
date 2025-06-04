// controllers/userController.js
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');

/**
 * Register a new user
 * Checks if email exists, creates user, returns success
 */
async function registerUser(req, res, next) {
  try {
    const { email, password, role } = req.body;

    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await userService.createUser({ email, password, role });
    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    next(error);
  }
}

/**
 * Login user
 * Validates credentials and returns JWT token
 */
async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser
};


