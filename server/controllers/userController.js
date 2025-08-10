const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// controllers/userController.js

exports.getProfile = (req, res) => {
  res.status(200).json({ message: 'User profile route working!' });
};

exports.registerUser = (req, res) => {
  // Your registration logic here
  res.status(200).json({ message: 'User registered' });
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. User dhundo email se
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please register first." });
    }

    // 2. Password check karo (bcrypt compare)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // 3. Success! User id aur info bhejo
    res.status(200).json({
      message: "Login successful!",
      userId: user._id,
      userData: {
        name: user.name,
        email: user.email,
        // baki jo bhi chahiye
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};
