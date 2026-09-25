const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
const businessesRoutes = require('./routes/businesses.routes');
const careersRoutes = require('./routes/careers.routes');
const investorsRoutes = require('./routes/investors.routes');
const impactRoutes = require('./routes/impact.routes');
const contactRoutes = require('./routes/contact.routes');

app.use('/api/businesses', businessesRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/investors', investorsRoutes);
app.use('/api/impact', impactRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Aproxio REST API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Root greeting
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Aproxio Eternal API',
    documentation: '/api/health'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n==========================================`);
  console.log(`🚀 Aproxio API Server running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`==========================================\n`);
});

module.exports = app;
