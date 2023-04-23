const fs = require('fs');
const url = require('url');
const http = require('http');

function RouteSetting(req, res) {
  var url = req.url;
  console.log('url=', url)
  if ('/' == url) {
    fs.readFile('./html/index.html', 'UTF-8', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  } else if ('/style.css' == url) {
    fs.readFile('./html/style.css', 'UTF-8', function (err, data) {
        console.log('test.css is read.')
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
    });
  } else if ('/picture/header.jpeg' == url) {
    fs.readFile('./html/picture/header.jpeg', function (err, data) {
        console.log('picture is read.')
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.write(data);
        res.end();
    });
  } else {
    console.log('unexpected url...')
    res.writeHead(200, {
        "Content-Type": "text/html"
      });
      const responseMessage = "<h1>Hello World</h1>";
      res.end(responseMessage);
  }
}
function serverSetUp(){
	const server = http.createServer().listen(8080);
	server.on('request', RouteSetting);
}

exports.serverSetUp = serverSetUp;