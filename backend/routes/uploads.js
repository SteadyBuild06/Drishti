const fs = require('fs');
const path = require('path');

function uploadHandler(req, res) {
  if (req.method !== 'GET') {
    res.writeHead(405, { Allow: 'GET', 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
  const uploadDir = path.join(__dirname, '..', '..', 'uploads');
  const files = fs.readdirSync(uploadDir).filter(name => name !== '.gitkeep');
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ uploads: files }));
}

module.exports = { uploadHandler };
