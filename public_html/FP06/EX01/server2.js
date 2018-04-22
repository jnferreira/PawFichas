var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('./countries.json', (err, file) => {
       response.end(file);
    });


}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');