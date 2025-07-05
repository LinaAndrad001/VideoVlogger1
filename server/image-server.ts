import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'image-server', port: 5500 });
});

// Serve images from images directory with security headers
app.use('/images', (req, res, next) => {
  // Security: validate file path to prevent directory traversal
  const decodedPath = decodeURIComponent(req.path);
  if (decodedPath.includes('..') || decodedPath.includes('~')) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  // Log image requests for debugging
  console.log(`Image server request: ${req.path} from ${req.get('User-Agent')?.substring(0, 50)}...`);
  
  // Set security and mobile-friendly headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year cache
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  
  next();
}, express.static(path.join(__dirname, '../images'), {
  maxAge: 31536000000, // 1 year cache
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    // Ensure proper MIME types
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    } else if (filePath.endsWith('.gif')) {
      res.setHeader('Content-Type', 'image/gif');
    } else if (filePath.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
    }
    
    // Additional security headers
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  }
}));

// Start the image server
const PORT = 5500;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Image server running on port ${PORT}`);
});