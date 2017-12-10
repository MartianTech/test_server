request = require('request');
config = require('./config.json');
host = config['host'];

exports.index = function(req, res) {
	res.send('Not implemented yet');
};

exports.query = function(req, res) {
	var user_id = Number(req.query['user_id']);
	var postdata = JSON.stringify({id: 1, method: "balance.query", params: [user_id]});
	console.log('data:' + postdata);
	request.post(host, {body: postdata}, (err, response) => {
		response_data = JSON.parse(response["body"]);
		res.send(response_data);
	});
};

exports.update = function(req, res) {
	var user_id = Number(req.body['user_id']);
	var asset = req.body['asset'];
	var type = req.body['type'];
	var business_id = req.body['business_id'];
	var change = req.body['change'];
	var params = [user_id, asset, type, business_id, change, {}];
	var postdata = JSON.stringify({id: 1, method: "balance.update", params:params})
	console.log('data:' + postdata);
	request.post(host, {body: postdata}, (err, response) => {
		response_data = JSON.parse(response["body"]);
		res.send(response_data);
	});
};

exports.history = function(req, res) {

};