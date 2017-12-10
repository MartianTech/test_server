request = require('request');
config = require('./config.json');

module.exports = function() {
	return function(method, params, callback) {
		if (!params) {
			params = [];
		}
		var postdata = JSON.stringify({id: 1, method:method, params:params});
		console.log('data:' + postdata);
		request.post(config['host'], {body: postdata}, (err, response) => {
			response_data = JSON.parse(response["body"]);
			callback(response_data);
		});
	};
}