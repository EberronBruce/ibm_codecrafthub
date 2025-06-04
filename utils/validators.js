
// utils/validators.js
const { body } = require('express-validator');

/**
 * Validation rules for user registration
 */
const registerValidationRules = () => [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['student', 'instructor', 'admin']).withMessage('Invalid role')
];

/**
 * Validation rules for user login
 */
const loginValidationRules = () => [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').exists().withMessage('Password is required')
];

module.exports = { registerValidationRules, loginValidationRules };