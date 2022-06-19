var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets' express.static('assets'));
 // app.use('/assets', function(req, res, next){
 // console.log(req.url);
 // next();


app.get('/', function(req, res){
    res.render('index');
});
app.get('/contact', function(req, res){
    res.render('contact');

});

