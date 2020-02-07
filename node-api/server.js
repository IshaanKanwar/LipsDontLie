const http = require('http');
// const app = require('./app');
// const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(port)

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url == '/api/customers'){
        res.write('New Moon');
        res.end();
    }
})

server.listen(3000);

console.log("Listening on port 3000");