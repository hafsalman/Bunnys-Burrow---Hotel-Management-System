// import express from 'express';
// import authRoutes from './Route/authRoutes.js'; 
// import path from 'path';

// const app = express();
// const __dirname = path.resolve();

// // Middleware for parsing JSON bodies
// app.use(express.json());

// // Serve static files from the frontend public directory
// app.use(express.static(path.join(__dirname, '../Project/Frontend/Public')));

// // Serve React app for all GET requests
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../Project/Frontend/Public/index.html'));
// });

// // Authentication routes
// app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import authRoutes from './Route/authRoutes.js'; 
import db from './Config/Database.js'; 
import path from 'path';

const app = express();
const __dirname = path.resolve();

// Middleware for parsing JSON bodies
app.use(express.json());

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 AS result');
    res.send(`Database connection successful: ${rows[0].result}`);
  } catch (error) {
    res.status(500).send(`Database connection error: ${error.message}`);
  }
});

// Serve static files from the frontend public directory
app.use(express.static(path.join(__dirname, '../Project/Frontend/Public')));

// Serve React app for all GET requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Project/Frontend/Public/index.html')); 
});

// Authentication routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});