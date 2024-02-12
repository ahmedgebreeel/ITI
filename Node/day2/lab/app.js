const http = require('http');
const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

const port = process.env.PORT || 7000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' || url === '/main.html') {
        // Handle GET request for root or /main.html
        const filePath = path.join(__dirname, 'client-side', 'main.html');
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (url === '/style.css') {
        // Handle GET request for /style.css
        const filePath = path.join(__dirname, 'client-side', 'style.css');
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }
        });
    } else if (url === '/' && req.method === 'POST') {
        // Handle POST request for /main.html
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const formData = queryString.parse(data);
            console.log(formData);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`Welcome ${formData.name}! Your entered data is as follows:<br>
                Mobile Number: ${formData.mobile}<br>
                Email: ${formData.email}<br>
                Address: ${formData.addr}`);
        });
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

