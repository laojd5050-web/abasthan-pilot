const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, service: 'abasthan-pilot', time: new Date().toISOString() }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>Abasthan Pilot</title></head>' +
    '<body style="font-family:sans-serif;margin:3em">' +
    '<h1>pilot ok</h1>' +
    '<p>Abasthan pilot web service is running.</p>' +
    '<p>Server time: ' + new Date().toISOString() + '</p>' +
    '</body></html>');
});

server.listen(port, '0.0.0.0', () => {
  console.log('pilot listening on ' + port);
});
