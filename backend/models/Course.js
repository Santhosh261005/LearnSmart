const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  pdfFiles: [
    {
      fileName: String,
      fileUrl: String,
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    }
  ],

  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema);
