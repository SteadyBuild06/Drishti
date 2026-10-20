const http = require('http');
const { serveStatic } = require('./backend/services/static-server');
const { healthHandler } = require('./backend/routes/health');
const { uploadHandler } = require('./backend/routes/uploads');

const port = Number(process.env.PORT) || 3000;
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname === '/api/health') return healthHandler(req, res);
  if (url.pathname === '/api/uploads') return uploadHandler(req, res);
  return serveStatic(req, res);
});

server.listen(port, () => console.log(`RigSafe LOTO running at http://localhost:${port}`));
