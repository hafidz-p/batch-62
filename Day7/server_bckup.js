const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(_, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('404 Not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
    
});



server.listen(port, function(error) {
    if (error) {
        console.log('Error starting server:', error);
    } else {
        console.log(`Server is running on port ${port}`);
    }
})



// const expess = require('express');
// const app = express();

// app.listen(3000);
