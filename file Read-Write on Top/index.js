const http = require('http');

let lastMessage; // store in memory (no fs)

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        res.end(`
            <p>${lastMessage}</p>
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username" placeholder="Enter Your Name" />
                <button type="submit">Submit</button>
            </form>
        `);
    }
    else if (req.url === '/message' && req.method === 'POST') {
        let chunks = [];

        req.on('data', chunk => {
            chunks.push(chunk);
        });

        

        req.on('end', () => {
            let formData = Buffer.concat(chunks).toString(); // username=Hitesh+chandel
            console.log("Form Data :", formData);
            lastMessage = formData.split('=')[1]; // store raw value with +
            console.log("Last Message :", lastMessage);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
