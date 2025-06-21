const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },

  viewedPDFs: [String], // list of filenames or file IDs

  progressPercentage: {
    type: Number,
    default: 0,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  lastAccessedAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Progress', progressSchema);
