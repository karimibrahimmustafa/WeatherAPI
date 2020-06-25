// Setup empty JS object to act as endpoint for all routes
projectData = {}

function getKey(dictionary) {
    return Object.keys(dictionary).length
}
// Require Express to run server and routes
const express = require('express');
const app = express();

// Start up an instance of app
const cors = require('cors');
app.use(cors());
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server


const port = 3000;

const server = app.listen(port, listening);

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
};

app.post('/add', recieve);

function recieve(req, response) {
    projectData[getKey(projectData)] = req.body;
    response.send(projectData[getKey(projectData) - 1]);
    console.log(projectData);
};