// here is where you setup a model for how to interface with the db

var orm = require('../config/orm.js');

var burger = {
	all: function(cb){
		orm.all("burgers", function(result){
			cb(result);
		});
	},
	// cols and vals are arrays
	create: function(cols, vals, cb){
		orm.create("burgers", cols, vals, function(result){
			cb(result);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update("burgers", objColVals, condition, function(result){
			cb(result);
		});
	},
	delete: function(condition, db){
		orm.delete("burgers", condition, function(result){
			cb(result);
		});
	}
};

module.exports = burger;