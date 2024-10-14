const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../javascript')));

// Connect to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Alfred2504',  // Add your DB credentials
  database: 'business_transactions'  // Your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Example Route: Home (serving index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Route for Signup
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Database error' });
    } else {
      res.status(201).json({ success: true, message: 'User registered successfully' });
    }
  });
});

// Add more routes (Login, Transactions, etc.)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});