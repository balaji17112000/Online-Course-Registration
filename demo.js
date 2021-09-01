var express = require("express"),
	mongoose = require("mongoose"),
	app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/demo");

var sSchema = new mongoose.Schema({
	title: String,
	author: String,
	cost: Number,
	descrpition: String	
});

var courses = mongoose.model("course", sSchema);

app. get('/', function(req,res){
	res.render("C:\ooad\src\components\MenuComponent.js")
	//res.send('Hiiii');
});


app.listen(3000, function(){
	console.log("Server started!!!");
});