var bodyParser = require('body-parser')

var data = [{item: 'get milk'}, {item: 'walk dog'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

	app.get("/todo", function(re, res){
		res.render('todo', {todos: data})

	});

	app.post("/todo", function(re, res){

	});

apt.delete('/todo' function(req, res){
	data = data.filter(function(todo){
		return todo.item.replace(/ /g, '-')!== req.params.item;
	});

});

}