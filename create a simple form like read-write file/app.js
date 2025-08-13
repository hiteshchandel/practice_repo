const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Server is created");

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(
            `<form action='/message' method='POST'>
                <label>Name:</label>
                <input type='text' name='username' placeholder='Enter Your Name' />
                <button type='submit'>Submit</button>
            </form>`
        );
    }
    else if (req.url === '/message' ) {
        res.setHeader('Content-Type', 'text/html');
        
        let dataChunks = [];
        req.on('data', (chunks) => {
            dataChunks.push(chunks);
        });

        req.on('end', () =>{
            let combinedBuffer = Buffer.concat(dataChunks);
            console.log(combinedBuffer);

            let formData = combinedBuffer.toString().split('=')[1];
            console.log(formData);

            fs.writeFile('formValues.txt', formData, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })
        })
    }
    else if (req.url === '/read') {
        // read form the file

        fs.readFile('formValues.txt', (err,data) => {
            console.log(data.toString());
            res.end(
                `<h1>${data.toString()}</h1>`
            );
        })

    }
})


const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})