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

	app.get("/todo", function(re, res)

	// get data from mongodb and pass it to view
	Todo.find({}, function(err,data){
		if (err) throw err;
	res.render('todo', {todos: data});
	});

		

app.post("/todo", function(re, res){
// get data from the view and add it to mongodb
var newTodo = Todo(req.body).save(function(err, data){
	if (err) throw.err;
	res.json(data);
});


apt.delete('/todo' function(req, res){
	// delete the requested item from mongodb
Todo.find({item: req.params.item.replace(/\-/g, "")}.remove(function(err.data){
	if(err) throw err;
	res.json(data);
});

