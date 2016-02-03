var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new mongoose.Schema({
	rowNumber: Number,
	colNumber: Number,
	data: String
});

mongoose.model('Data', dataSchema);