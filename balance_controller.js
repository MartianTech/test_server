send_request = require('./engine_request_utils')();
host = config['host'];

exports.index = function(req, res) {
	res.send('Not implemented yet');
};

exports.query = function(req, res) {
	var user_id = Number(req.query['user_id']);
	send_request("balance.query", [user_id], (data) => {
		res.send(data);
	});
};

exports.update = function(req, res) {
	var user_id = Number(req.body['user_id']);
	var asset = req.body['asset'];
	var type = req.body['type'];
	var business_id = req.body['business_id'];
	var change = req.body['change'];
	var params = [user_id, asset, type, business_id, change, {}];

	send_request("balance.update", params, (data) => {
		res.send(data);
	});
};

exports.history = function(req, res) {

};