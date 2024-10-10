const express = require('express');
const path = require('path');

const app = express(); // Make sure to initialize the app first

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// A basic route to serve the index.html from the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});