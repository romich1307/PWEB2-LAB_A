const http = require('http');
const server = http.createServer((request, response) => {
    response.end('Hola mundo');
});
server.listen(3000);