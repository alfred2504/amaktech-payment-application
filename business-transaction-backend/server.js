// Import necessary modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Added to parse JSON requests

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../javascript')));
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../images')));

// Routes to serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/checkout.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/contact.html'));
});

app.get('/start-transaction', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/start-transaction.html'));
});

// Mock endpoint to simulate a signup
app.post('/process-signup', (req, res) => {
    const { username, email } = req.body;
    // Simulate saving to a database
    console.log(`Signup for user: ${username}, email: ${email}`);
    res.json({ success: true }); // Sending a JSON response
});

// Mock endpoint to simulate a login
app.post('/process-login', (req, res) => {
    const { email, password } = req.body;
    // Simulate login check
    console.log(`Login attempt for email: ${email}`);
    res.send('Login successful!');
});

// Mock endpoint to simulate starting a transaction
app.post('/process-transaction', (req, res) => {
    const { transactionName, transactionAmount, transactionDate, transactionType } = req.body;
    console.log(`Transaction: ${transactionName}, Amount: ${transactionAmount}, Date: ${transactionDate}, Type: ${transactionType}`);
    res.send('Transaction processed!');
});

// Start server
app.listen(port, () => {
    console.log(`Mockup backend running on http://localhost:${port}`);
});