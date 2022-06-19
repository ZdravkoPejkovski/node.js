var bodyParser = require('body-parser');
var moongoose = require('mongoose')


// Connect to the database
moongoose.connect('mongodb://test:test@ds017195.mlab.com:17195/todo');

// Create a schema - this is like a blueprint
var todoSchema = new moongoose.Schema({
	item: String
});

var Todo = moongoose.model('Todo',todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
	if (err) throw err;
});

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