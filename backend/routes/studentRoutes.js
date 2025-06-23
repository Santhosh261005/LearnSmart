// Define routes for student-related operations like profile,stats
const express = require('express');
const router = express.Router();

//importing the authentication middleware
const authenticationMiddleware = require('../middleware/authMiddleware');

const { getStudentProfile, updateStudentProfile, getStudentStats } = require('../controllers/studentController');

// Route to get student profile
router.get('/getStudentProfile',authenticationMiddleware, getStudentProfile);

// Route to update student profile
router.patch('/updateStudentProfile',authenticationMiddleware, updateStudentProfile);

// Route to get student stats
router.get('/getStudentStats', getStudentStats);

module.exports = router;