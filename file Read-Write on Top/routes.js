// Way 2: export functions individually
const { getMessage, setMessage } = require('./messageStore');

function handleHome(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(`
        <p>${getMessage() || ''}</p>
        <form action="/message" method="POST">
            <label>Name:</label>
            <input type="text" name="username" placeholder="Enter Your Name" />
            <button type="submit">Submit</button>
        </form>
    `);
}

function handleMessage(req, res) {
    let chunks = [];

    req.on('data', chunk => chunks.push(chunk));

    req.on('end', () => {
        let formData = Buffer.concat(chunks).toString();
        let message = formData.split('=')[1];
        setMessage(message);

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    });
}

module.exports = { handleHome, handleMessage };
