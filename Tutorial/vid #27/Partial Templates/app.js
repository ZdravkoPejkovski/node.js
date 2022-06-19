var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.send('this is the contact page');

});
app.get('/profile/:name', function(req, res){
var data ={ age: 29, job: 'ninja', hobbie: ['eating', 'fighting', 'fishing]'};
    res.render('profile', {person: req.params.name, data: data});


app.listen(3000);