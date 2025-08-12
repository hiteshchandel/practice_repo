const http = require('http');

const server = http.createServer((req, res) => {
    console.log("server is created");

    //req.url, req,headers
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end("<h1>Hello World</h1>");
    }
    else if (req.url === '/pizza') {
        res.statusCode = 200;
        res.end("<h1>This is your pizza</h1>");
    }
    else if (req.url === '/home') {
        res.statusCode = 200;
        res.end("<h1>Welcome home</h1>");
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end("<h1>Welcome to About us</h1>");
    }
    else if (req.url === '/node') {
        res.statusCode = 200;
        res.end("<h1>Welcome to Node js project</h1>");
}
    else {
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
})

let port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})