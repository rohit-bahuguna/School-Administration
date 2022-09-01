const express = require('express');
const { addStudent , getAllStudents , getStudentById , deleteStudent , updateStudentDetails} =  require('../Controllers/StudentController')

const studentRoute = express.Router();

studentRoute.post('/student', addStudent);

studentRoute.get('/student/:id', getStudentById);

studentRoute.get('/student', getAllStudents);

studentRoute.put('/student/:id', updateStudentDetails);

studentRoute.delete('/student/:id', deleteStudent)

module.exports = studentRoute;