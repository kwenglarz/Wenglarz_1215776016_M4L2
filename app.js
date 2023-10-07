// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// HAD TO ADD - need to allow express to parse out JSON body
app.use(express.json());

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// Add the routes to the app
const studentsRouter = require('./routes/studentsRoutes');
app.use('/api/v1/students', studentsRouter);

module.exports = app;