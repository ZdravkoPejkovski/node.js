var http = require ('http');
var fs = require ('fs');

var server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.WriteHead(200, {'Content-Type': 'text/html'});
    var myReadstream = fs.createReadStream(__dirname +'/index.html', 'utf-8');
    myReadstream.pipe(res);
    
});

server.listen(3000, '127.0.0.1');
console.log('yo, now listening to port 3000');