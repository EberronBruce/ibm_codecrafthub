// services/userService.js
const User = require('../models/userModel');

/**
 * Create a new user
 * @param {Object} userData
 * @returns {Promise<User>}
 */
async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}

/**
 * Find user by email
 * @param {string} email
 * @returns {Promise<User|null>}
 */
async function findUserByEmail(email) {
  return await User.findOne({ email });
}

module.exports = {
  createUser,
  findUserByEmail
};
