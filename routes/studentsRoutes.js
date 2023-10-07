const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router
    .route('/')
    .get(studentsController.getAllStudents)

router
    .route('/new')
    .get(studentsController.routeToAddStudent)
    .post(studentsController.addStudent)

router
    .route('/edit')
    .get(studentsController.routeToEditStudent)
    .post(studentsController.updateStudent)

module.exports = router;
