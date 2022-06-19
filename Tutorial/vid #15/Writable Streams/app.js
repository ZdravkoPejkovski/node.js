var http = require ('http');
var fs = require ('fs');

var myReadstream = fs.createReadStream(__dirname +'/readMe.txt');
var myWriteStream = createWriteStream(__dirname +'/writeMe.txt')
myReadstream.on('data', function(chunk){;
console.log('new chunk received:');
console.log(chunk);
myWriteStream.write(chunk);
});