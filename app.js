const http = require('http');

const server = http.createServer((req, res) => {
    res.end('i want fix it are not again check 🔥');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});