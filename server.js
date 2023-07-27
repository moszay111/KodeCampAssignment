const http = require('http');
const fs = require('fs');
const url = require('url')

const port = 3000;

function requestLogger(req, res, next) {
    const method = req.method;
    const url = req.url;
    console.log(`${method} ${url}`);
    next();
  }

const server = http.createServer((req, res) => {

    requestLogger(req, res, () => {
        if (req.url === '/file') {
            fs.readFile('./view/data.txt', 'utf8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end("Error handling the code");
                } else {
                    res.setHeader('Content-Type', 'text/plain');
                    res.write(data);
                    res.end();
                }
            });
        } else if (req.url === '/user') {
            const user = {
                name: 'Moses',
                email: 'moszay@gmail.com',
                age: 60
            };
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(user));
            res.end();
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
        }
    })})

    server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });



   






