# How to View Production Build

The production build (`npm run build`) creates a `dist/` folder with optimized files. Due to browser security restrictions, you cannot simply open `dist/index.html` directly in a browser - ES modules require a web server.

## Method 1: Use Vite Preview (Recommended)
```bash
npm run preview
```
This will start a server at `http://localhost:4173`

## Method 2: Use Built-in Server
```bash
npm run serve-dist
```
This will start a server at `http://localhost:8000`

## Method 3: Use Python (if you have Python installed)
```bash
cd dist
python -m http.server 8000
```

## Method 4: Use Batch File (Windows)
Double-click `serve-local.bat` to start a Python server

## Why Can't I Open index.html Directly?

Modern browsers block ES modules loaded via `file://` protocol for security reasons (CORS policy). The production build uses ES modules (`<script type="module">`), so it requires a web server to function properly.

**Error you might see:**
```
Access to script at 'file:///path/to/index-xxx.js' from origin 'null' has been blocked by CORS policy
```

## Troubleshooting

If you see a blank page when opening `dist/index.html` directly:
1. Open browser developer tools (F12)
2. Check the Console tab for errors
3. You'll likely see CORS or module loading errors
4. Use one of the server methods above instead

## For Deployment

When deployed to GitHub Pages or any web server, the site will work perfectly because it's served over HTTP/HTTPS protocols rather than the file:// protocol.