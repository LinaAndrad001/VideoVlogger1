import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', images: 'serving from /images' });
});

// Debug endpoint for mobile troubleshooting
app.get('/debug/images', (req, res) => {
  const imagesList: string[] = [];
  try {
    // List some sample images
    const operaDir = path.join(__dirname, '../images/paris/opera');
    if (fs.existsSync(operaDir)) {
      const operaFiles = fs.readdirSync(operaDir).slice(0, 3);
      operaFiles.forEach(file => {
        imagesList.push(`/images/paris/opera/${file}`);
      });
    }
  } catch (error) {
    console.error('Error listing images:', error);
  }
  
  res.json({
    status: 'ok',
    server: req.get('host'),
    protocol: req.protocol,
    baseUrl: `${req.protocol}://${req.get('host')}`,
    sampleImages: imagesList,
    userAgent: req.get('User-Agent')
  });
});

// Direct image test endpoint
app.get('/test-image', (req, res) => {
  const testImagePath = path.join(__dirname, '../images/paris/opera/facade.jpg');
  
  if (fs.existsSync(testImagePath)) {
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(testImagePath);
  } else {
    res.status(404).json({ error: 'Test image not found', path: testImagePath });
  }
});

// Serve images from images directory with security and mobile-optimized headers
app.use('/images', (req, res, next) => {
  // Security: validate file path to prevent directory traversal
  const decodedPath = decodeURIComponent(req.path);
  if (decodedPath.includes('..') || decodedPath.includes('~')) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  // Log image requests for debugging
  console.log(`Image request: ${req.path} from ${req.get('User-Agent')?.substring(0, 50)}...`);
  
  // Set security and mobile-friendly headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year cache for production
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  
  next();
}, express.static('images', {
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

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
