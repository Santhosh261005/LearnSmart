const User = require('../models/User');
const {BadRequestError,UnauthenticatedError} = require('../errors');
const jwt = require('jsonwebtoken');

const createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      throw new BadRequestError('Please provide name, email, password, and role');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email already in use');
    }

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { name, password, role } = req.body;
    // console.log({ name, password, role })
    if (!name || !password || !role) {
      throw new BadRequestError('Please provide name, password, and role');
    }

    const user = await User.findOne({ name, role });
    if (!user) {
      throw new UnauthenticatedError('Invalid credentials');
    }

    const isMatch = await user.matchPassword(password);
    // console.log({ isMatch })
    if (!isMatch) {
      throw new UnauthenticatedError('Invalid credentials');
    }

    const token = createJWT({ name: user.name, _id: user._id });
    console.log({ token })
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
};
