var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/api')

	.post(function (req, res) {
		res.send({message: "Make a new piece of data"});
	})

	.get(function (req, res) {
		res.send({message: "Return all data"});
	})

	.delete(function (req, res) {
		res.send({message: "Delete all data"})
	});

router.route('/api/:id')

	.put(function(req, res) {
		res.send({message: "Modify a specific piece of data"})
	})

	.get(function(req, res) {
		res.send({message: "Return a specific piece of data"})
	})

	.delete(function(req, res) {
		res.send({message: "Delete a specific piece of data"})
	});

module.exports = router;