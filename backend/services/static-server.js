const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', '..', 'public');
const types = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };

function serveStatic(req, res) {
  const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const relative = requested === '/' ? 'index.html' : requested.replace(/^\/+/, '');
  const file = path.resolve(publicDir, relative);
  if (!file.startsWith(publicDir + path.sep) && file !== path.join(publicDir, 'index.html')) return notFound(res);
  fs.readFile(file, (error, content) => {
    if (error) return notFound(res);
    res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(content);
  });
}

function notFound(res) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Not found'); }

module.exports = { serveStatic };
