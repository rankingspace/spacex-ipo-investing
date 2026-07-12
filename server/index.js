import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { limiter, corsOptions, cspHeaders } from './config/security.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors(corsOptions));
app.use((req, res, next) => {
  Object.entries(cspHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});
app.use('/api/', limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    environment: process.env.NODE_ENV,
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`✅ SpaceX IPO Platform running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔐 Security: Rate limiting ${process.env.ENABLE_RATE_LIMITING === 'true' ? 'enabled' : 'disabled'}`);
});
