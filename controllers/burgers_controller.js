// here is where you create all the functions that will do the routing for your app, and the logic of each route
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(request, result){
	result.redirect("/burgers");
});

router.get("/burgers", function(request, result){
	burger.all(function(data){
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		result.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(request, result){
	burger.create(["name", "eaten"], [request.body.name, request.body.eaten], function(){
		result.redirect("/burgers");
	});
});

router.put("/burgers/update/:id", function(request, result){
	var condition = "id = " + request.params.id;
	console.log("condition", condition);
	burger.update({ eaten: request.body.eaten }, condition, function(){
		result.redirect("/burgers");
	});
});

router.delete("/burgers/delete/:id", function(request, result){
	var condition = "id = " + request.params.id;
	burger.delete(condition, function(){
		result.redirect("/burgers");
	});
});
module.exports = router;
