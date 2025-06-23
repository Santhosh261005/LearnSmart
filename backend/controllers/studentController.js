// Studnet Controller for handling all student-related operations like getting profile, updating profile, and getting stats

const user = require('../models/User');

const { StatusCodes } = require('http-status-codes');

const getStudentProfile = async (req, res) => {
  const { userId } = req.user.id;

  try {
    const student = await user.findOne(userId).select('-password');
    // console.log(student);
    if (!student) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Student not found' });
    }
    res.status(StatusCodes.OK).json(student);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}

const updateStudentProfile = 
async (req, res) => {
  //const { userId } = req.user;
  const { name, email } = req.body;
  console.log({  name, email });

  console.log(req.user);
  const  id  = req.user.id; // Assuming userId is passed in the request body
  
  

  try {
    const student = await user.findByIdAndUpdate(id, { name, email }, { new: true }).select('-password');
    if (!student) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Student not found' });
    }
    res.status(StatusCodes.OK).json(student);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}



const getStudentStats = async (req, res) => {
  const { userId } = req.user;

  try {
    const student = await user.findById(userId).select('studentData');
    if (!student) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Student not found' });
    }
    res.status(StatusCodes.OK).json(student.studentData);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}

module.exports = {
  getStudentProfile,
  updateStudentProfile,
  getStudentStats
};