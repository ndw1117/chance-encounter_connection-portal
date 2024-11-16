// This is the main script for hosting the web application server
// Author: Nick Will

const express = require('express');
const path = require('path'); // For working with file paths
const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;;

// Middleware to parse JSON data from POST requests
app.use(express.json());

// Serve static files from the 'client' folder
app.use(express.static('client'));

// Get access to the data.js file so the data can be sent when requested by a client
const data = require('./data.js');

// Serve the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// An endpoint for an external application to request the data
app.get('/data', (req, res) => {
    const dataObject = data.getData();
    console.log(dataObject);
    res.json(dataObject);  // Send JSON response
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});