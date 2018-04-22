const http = require('http');
const fs = require('fs');
// var logger = fs.createWriteStream('file.txt', {
//     flags: 'a'
// })
var formidable = require('formidable');


const server = http.createServer(function (req, res) {

    let file;
    console.log('request ', req.url);

    try {

        file = fs.readFileSync('./Formulario.jade');

    } catch (e) {

        res.writeHead(404, {'content-type': 'text/plain'});
        res.write('404 File Not Found!');
        res.end();
        return;

    }

    if (file) {

        res.writeHead(200, {'content-type': 'text/html'});
        res.write(file);
        res.end();

    }

    if (req.method === 'POST' && req.url === '/forms') {


        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/Users/joaoferreira/Desktop/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });

        //
        //     body += data.toString();
        //
        //
        //     fs.writeFile("./file.txt", data, function (err) {
        //
        //         if (err) {
        //             return console.log(err);
        //         }
        //
        //         logger.write(data + '\n');
        //
        //         console.log("The file was saved!");
        //
        //     });
        //
        // });
        //
        // req.on('end', () => {
        //     console.log(body);
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.end('./index.html');
        // });

    }


    if (req.method === 'GET' && req.url === '/seeUsers') {

        fs.readFile('./file.txt', 'utf8', function (err, data) {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('OLA MUNDO');
            console.log(data);
        });

    }


}).listen(8125, () => {
    console.log('Server running on http://127.0.0.1:8125/');
});