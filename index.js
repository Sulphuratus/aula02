//index.js
/*
var x = 1;
var y = 2;
console.log(x+y);
console.log("Hello World");
*/

// Exemplo de código pra testar servidor  pra imprimir Hello World com Node e js
// Código de exemplo no endereço abaixo
// https://nodejs.dev/pt/learn/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
