request = require('request');
config = require('./config.json');

exports.index = function(req, res) {
	res.send('Not implemented yet');
};

exports.query = function(req, res) {
	user_id = Number(req.query['user_id']);
	var postdata = JSON.stringify({id: 1, method: "balance.query", params: [user_id]});
	console.log('data:' + postdata);
	request.post(config['host'], {body: postdata}, (err, response) => {
		response_data = JSON.parse(response["body"]);
		res.send(response_data);
	});
};

exports.update = function(req, res) {

};

exports.history = function(req, res) {

};