var fs = require('fs');

// synchronous
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

// asynchronous
fs.readFile('readMe.txt', 'utf8', function(err, data){
	fs.writeFile('writeMe.txt', data);
});