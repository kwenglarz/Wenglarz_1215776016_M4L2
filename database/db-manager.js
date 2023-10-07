//This is where we will implement our CRUD operations.
const Student = require('../model/student');

// get all students
exports.getAllStudents = async () => {
    const filter = {};
    return await Student.find(filter);
}

// create a new student
exports.addStudent = async (stud) => {
    return await Student.create(stud);
}

//update specific student
exports.updateStudent = async (newStudentInfo) => { 
    return await Student.findOneAndUpdate({name: newStudentInfo.name}, newStudentInfo, {
        new: true,
        runValidators: true
    });
}
