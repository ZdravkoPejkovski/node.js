var fs = require('fs');

// delete file:
// fs.unlink('writeMe.txt'):

// create a folder:
// fs.mkdir('stuff');

// // delete a folder
// fs.rmdir('stuff');

fs.mkdir('stuff', function(){
	fs.readFile('readMe.txt', 'utf8', function (err, data){
		fs.writeFile('./stuff/writeMe.txt', data);
	});
});

// delete folder, once it's empty
// fs.unlink('./stuff/writeMe.txt', function(){
// 	fs.rmdir('stuff');
// });