// Way 3: export a single function
const http = require('http');
const { handleHome, handleMessage } = require('./routes');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        handleHome(req, res);
    }
    else if (req.url === '/message' && req.method === 'POST') {
        handleMessage(req, res);
    }
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
