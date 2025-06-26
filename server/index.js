const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'engineering_lab',
});

// Fetch publications
app.get('/api/publications', (req, res) => {
  db.query('SELECT * FROM publications', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Fetch projects
app.get('/api/projects', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
