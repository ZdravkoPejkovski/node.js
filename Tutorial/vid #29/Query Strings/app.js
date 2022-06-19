var express = require ('express');
var app = express();

app.set ('view engine', 'ejs');
app.use ('/assets', express.static('stuff'));

app.get('/', function (req, res) {
	res.render('index');
});

ap.get('/contact', function(req, res){
	res.render('contact',{qs: req.querry});
});

app.get('/profile/:name', function(req, res){

});