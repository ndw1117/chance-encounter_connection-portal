const express = require('express');
const path = require('path'); // For working with file paths
const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;;

// Middleware to parse JSON data from POST requests
app.use(express.json());

// Serve static files from the 'client' folder
app.use(express.static('client'));

// Serve the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});