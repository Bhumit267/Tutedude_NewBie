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
    // In a real application, you would hash this password BEFORE saving it to the database.
    // For example, using bcrypt:
    // set(function(v) {
    //   const salt = bcrypt.genSaltSync(10);
    //   return bcrypt.hashSync(v, salt);
    // })
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

// Optional: Add a pre-save hook to hash the password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('userPassword')) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.userPassword = await bcrypt.hash(this.userPassword, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;