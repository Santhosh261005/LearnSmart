const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ['student', 'instructor'],
    required: true,
  },
    profilePic: {
    type: String, // URL or local file path
    default: '',  // Can set a default avatar path if needed
  },

  studentData: {
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  },

  instructorData: {
    createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  },
}, {
  timestamps: true,
});

// 🔐 Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 🔐 Compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
