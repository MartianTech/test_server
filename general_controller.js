const send_request = require('./engine_request_utils')();

exports.index = function(req, res) {
	res.send('Not implemented yet');
};

exports.asset_list = function(req, res) {
	send_request("asset.list", [], (data) => {
		res.send(data);
	});
};

exports.asset_summary = function(req, res) {
	send_request("asset.summary", [], (data) => {
		res.send(data);
	});
}

exports.market_list = function(req, res) {
	send_request("market.list", [], (data) => {
		res.send(data);
	});
}

exports.market_summary = function(req, res) {
	send_request("market.summary", [], (data) => {
		res.send(response_data);
	});
};