const dbManager = require('../database/db-manager');

exports.getAllStudents = function(req, res) {
    dbManager.getAllStudents().then(response => {
        res.render('list-students', { students: response });
    }).catch(err => {
        res.render('list-students', { message: err });
    });
};

exports.addStudent = function(req, res) {
    const course = {
        name: req.body.course,
        grade: req.body.grade
    };

    const student = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        courses: [course]
    };

    // Add the submitted student data to our data store
    dbManager.addStudent(student).then(response => {
        res.render('new-student', { message: `Student with name ${response.name} created successfully` });
    }).catch(err => {
        res.render('new-student', { message: err });
    });
}

exports.updateStudent = function(req, res) {
    // Parse ID
    const course = {
        name: req.body.course,
        grade: req.body.grade
    };

    const updatedStudent = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        courses: [course]
    };

    // Add the submitted student data to our data store
    dbManager.updateStudent(updatedStudent).then(response => {
        res.render('edit-student', { message: `Student with name ${response.name} updated successfully` })
    }).catch(err => {
        res.render('edit-student', { message: err });
    });
};

exports.routeToAddStudent = function(req, res) {
    res.render('new-student');
}

exports.routeToEditStudent = function(req, res) {
    res.render('edit-student');
}
