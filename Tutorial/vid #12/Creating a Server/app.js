var http = require('http');

 var server = http.createServer(function(req, res){
 	console.log('request was made: ' + req.url);
 	res.writeHead(200, {'Content-type': 'text/plain'});
 	res.end('Hey ninjas');
 });

 server.listen(3000, '127.0.0.1');
 console.log('You are now listening to port 3000');
© 2022 GitHub, Inc.
Terms
Privacy
Security
