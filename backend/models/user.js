const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userRole: {
    type: String,
    enum: ['vendor', 'farmer', 'hybrid'], // Enforces that userRole can only be one of these values
    required: [true, 'User role is required'],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, 'User name is required'],
    trim: true, // Removes whitespace from both ends of a string
    minlength: [3, 'User name must be at least 3 characters long'],
  },
  userEmail: {
    type: String,
    required: [true, 'User email is required'],
    unique: true, // Ensures email addresses are unique
    trim: true,
    lowercase: true, // Stores all emails in lowercase
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email format validation
  },
  userPassword: {
    type: String,
    required: [true, 'User password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
  },
  userCity: {
    type: String,
    required: [true, 'User city is required'],
    trim: true,
  },
  userArea: {
    type: String,
    required: [true, 'User area is required'],
    trim: true,
  },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

const User = mongoose.model('User', userSchema);

module.exports = User;