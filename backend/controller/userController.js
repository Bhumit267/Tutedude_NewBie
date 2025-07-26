const User = require('../models/user'); // Assuming your user schema file is in ../models/userModel.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // For handling user sessions after login (optional but recommended)

// --- Helper function for generating JWT token (optional) ---
// In a real application, keep your JWT secret in environment variables (e.g., process.env.JWT_SECRET)
const generateToken = (id) => {
  return jwt.sign({ id }, 'your_jwt_secret', { // Replace 'your_jwt_secret' with a strong, environment-variable-based secret
    expiresIn: '1h', // Token expires in 1 hour
  });
};

// --- User Signup Method ---
exports.signup = async (req, res) => {
  try {
    const { userRole, userName, userEmail, userPassword, userCity, userArea } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // 2. Hash the password
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(userPassword, salt); // Hash the password with the salt

    // 3. Create new user
    const newUser = new User({
      userRole,
      userName,
      userEmail,
      userPassword: hashedPassword, // Store the hashed password
      userCity,
      userArea,
    });

    // 4. Save user to database
    await newUser.save();

    // 5. Generate JWT token (optional, for immediate login after signup)
    const token = generateToken(newUser._id);

    // 6. Respond with success
    res.status(201).json({
      message: 'User registered successfully!',
      user: {
        id: newUser._id,
        userName: newUser.userName,
        userEmail: newUser.userEmail,
        userRole: newUser.userRole,
        userCity: newUser.userCity,
        userArea: newUser.userArea,
      },
      token, // Send token if immediate login is desired
    });

  } catch (error) {
    // Handle validation errors or other database errors
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup.', error: error.message });
  }
};

// --- User Login Method ---
exports.login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials: User not found.' });
    }

    // 2. Compare provided password with hashed password
    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials: Incorrect password.' });
    }

    // 3. Generate JWT token
    const token = generateToken(user._id);

    // 4. Respond with success
    res.status(200).json({
      message: 'Logged in successfully!',
      user: {
        id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        userRole: user.userRole,
        userCity: user.userCity,
        userArea: user.userArea,
      },
      token,
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login.', error: error.message });
  }
};

// --- Edit User Method ---
exports.editUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from URL parameters
    const updates = req.body; // Get updates from request body

    // Optional: If password is being updated, hash it before saving
    if (updates.userPassword) {
      const salt = await bcrypt.genSalt(10);
      updates.userPassword = await bcrypt.hash(updates.userPassword, salt);
    }

    // Find user by ID and update. `new: true` returns the updated document.
    // `runValidators: true` ensures schema validations are run on updates.
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Respond with the updated user data (excluding password for security)
    res.status(200).json({
      message: 'User updated successfully!',
      user: {
        id: updatedUser._id,
        userName: updatedUser.userName,
        userEmail: updatedUser.userEmail,
        userRole: updatedUser.userRole,
        userCity: updatedUser.userCity,
        userArea: updatedUser.userArea,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt,
      },
    });

  } catch (error) {
    // Handle validation errors (e.g., if an invalid userRole is provided) or other database errors
    console.error('Edit user error:', error);
    res.status(500).json({ message: 'Server error during user update.', error: error.message });
  }
};

// --- Optional: Get User Profile Method ---
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : req.params.id;

    const user = await User.findById(userId).select('-userPassword');

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({
      message: 'User profile fetched successfully.',
      user: {
        id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        userRole: user.userRole,
        userCity: user.userCity,
        userArea: user.userArea,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ message: 'Server error fetching user profile.', error: error.message });
  }
};

module.exports = { signup, login, editUser, getUserProfile };
