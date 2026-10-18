// Podgląd statycznego eksportu: pnpm build && pnpm preview.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
const root = resolve('out');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
};
http
  .createServer(async (req, res) => {
    if (!['GET', 'HEAD'].includes(req.method)) {
      res.writeHead(405);
      res.end();
      return;
    }
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      let file = resolve(root, '.' + pathname);
      if (file !== root && !file.startsWith(root + sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      try {
        if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
      } catch {}
      let data;
      try {
        data = await readFile(file);
      } catch {
        file = resolve(root, '404.html');
        data = await readFile(file);
        res.statusCode = 404;
      }
      res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-store');
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch {
      res.writeHead(400);
      res.end('Bad request');
    }
  })
  .listen(Number(process.env.PORT || 3000), '127.0.0.1', () =>
    console.log('Podgląd: http://127.0.0.1:' + (process.env.PORT || 3000)),
  );
