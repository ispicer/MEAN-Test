var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Data = mongoose.model('Data');

/* GET users listing. */
router.route('/data')

	.post(function (req, res) {
		var content = new Data();
		content.data = req.body.data;
		content.rowNumber = req.body.rowNumber;
		content.colNumber = req.body.colNumber;
		content.save(function(err, content) {
			if(err) {
				return res.send(500, {message: 'Database error'});
			}
			return res.json(content);
		});
	})

	.get(function (req, res) {
		Data.find(function(err, content) {
			if(err) {
				return res.send(500, {message: 'Database error'});
			}

			res.send(content);
		})
	})

	.delete(function (req, res) {
		Data.remove({}, function(req, res){

		});
	});

module.exports = router;