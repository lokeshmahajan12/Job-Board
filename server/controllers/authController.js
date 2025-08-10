const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// login
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Step 1: Check if user exists
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found. Please register first.' });
//     }

//     // Step 2: Check password
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     // Step 3: Success
//     return res.status(200).json({ message: 'User is logged in', user });
//   } catch (error) {
//     return res.status(500).json({ message: 'Server error', error });
//   }
// };
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. User check karo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Password compare karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 3. JWT Token generate karo
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,   // tumhari secret key .env me honi chahiye
      { expiresIn: '1d' }
    );

    // 4. Response bhejo frontend ko token ke saath
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      message: "Login successful",
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered." });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({ message: "Registration successful!", user: newUser });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser,loginUser };
