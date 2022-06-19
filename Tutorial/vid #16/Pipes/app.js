var http = require ('http');
var fs = require ('fs');

var server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.WriteHead(200, {'Content-Type': 'text/plain'});
    var myReadstream = fs.createReadStream(__dirname +'/readMe.txt');
    var myWriteStream = createWriteStream(__dirname +'/writeMe.txt')
    myReadstream.pipe(myWriteStream);
    
});

server.listen(3000, '127.0.0.1');
console.log('yo, now listening to port 3000');