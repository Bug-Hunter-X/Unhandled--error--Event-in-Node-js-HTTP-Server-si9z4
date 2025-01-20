const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle the 'error' event
server.on('error', (err) => {
  console.error('Server error:', err);
  // Gracefully shut down the server
  server.close(() => {
    console.log('Server closed due to error.');
  });
});

server.listen(8080);

console.log('Server is running on port 8080');