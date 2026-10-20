function healthHandler(_req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ status: 'ok', service: 'rigsafe-loto' }));
}

module.exports = { healthHandler };
